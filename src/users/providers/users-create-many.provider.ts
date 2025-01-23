import {
  ConflictException,
  Injectable, OnApplicationBootstrap,
  RequestTimeoutException
} from "@nestjs/common";
import { DataSource } from 'typeorm';
import { User } from '../user.entity';
import { CreateManyUsersDto } from '../dto/create-many-users.dto';

@Injectable()
export class UsersCreateManyProvider  {
  constructor(
    /*
     * Inject Datasource
     */
    private readonly dataSource: DataSource,
  ) {}



  public async createMany(createManyUsersDto: CreateManyUsersDto) {
    const newUsers: User[] = [];
    // Create Query Runner Instance
    const queryRunner = this.dataSource.createQueryRunner();

    // Connect Query Runner to datasource
    await queryRunner.connect();

    // Start Transaction
    await queryRunner.startTransaction().catch((err) => {
      throw new RequestTimeoutException();
    });

    try {
      for (let user of createManyUsersDto.users) {
        let newUser = queryRunner.manager.create(User, user);
        let result = await queryRunner.manager.save(newUser);

        newUsers.push(result);
      }
      // If successful commit
      await queryRunner.commitTransaction();
    } catch (error) {
      // If unsuccessful rollback
      await queryRunner.rollbackTransaction();
      throw new ConflictException(error.detail);
    } finally {
      // Release connection
      await queryRunner.release().catch((err) => {
        throw new RequestTimeoutException();
      });
    }

    return newUsers;
  }
}
