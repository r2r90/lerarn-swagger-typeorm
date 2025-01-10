import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dto/get-users-param.dto";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dto/create-user.dto";

/**
 * Service to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService {
  /**
   * Constructor for the UsersService class.
   *
   * This constructor is responsible for injecting the AuthService dependency into the UsersService.
   * The `forwardRef` wrapper is used to handle circular dependencies between AuthService and UsersService,
   * ensuring both services can reference each other without initialization issues.
   */
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    // Check is user exists with same email
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });
    // Handle exception

    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);
    return newUser;

    // Create a new user
  }

  /**
   * The method to get all users from the data.
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Bill',
        email: 'gates@doe.com',
      },
    ];
  }

  /**
   * The method to get user by id from the data.
   */
  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'John',
      email: 'john@doe.com',
    };
  }
}
