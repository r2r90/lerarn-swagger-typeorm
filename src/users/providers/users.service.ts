import {
  BadRequestException,
  Inject,
  Injectable,
  OnApplicationBootstrap,
  RequestTimeoutException
} from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { ConfigType } from "@nestjs/config";
import profileConfig from "../config/profile.config";
import { UsersCreateManyProvider } from "./users-create-many.provider";
import { CreateManyUsersDto } from "../dto/create-many-users.dto";
import { GetUsersParamDto } from "../dto/get-users-param.dto";
import { GetUsersQueryDto } from "../dto/get-users-query.dto";
import { PaginationProvider } from "../../common/pagination/providers/pagination.provider";
import { CreateUserProvider } from "./create-user.provider";
import { FindOneUserByEmailProvider } from "./find-one-user-by-email.provider";
import { FindOneByGoogleIdProvider } from "./find-one-by-google-id.provider";

/**
 * Service to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService implements OnApplicationBootstrap {
  /**
   * Constructor for the UsersService class.
   *
   * This constructor is responsible for injecting the AuthService dependency into the UsersService.
   * The `forwardRef` wrapper is used to handle circular dependencies between AuthService and UsersService,
   * ensuring both services can reference each other without initialization issues.
   */
  constructor(
    /*
     * Injecting  User Repository
     */

    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(profileConfig.KEY)
    private readonly profileConfiguaration: ConfigType<typeof profileConfig>,
    /*
     * Inject usersCreateMayProvider
     */
    private readonly usersCreateManyProvider: UsersCreateManyProvider,
    /*
     * Inject Pagination Provider
     */
    private readonly paginationProvider: PaginationProvider,
    /*
     * Inject Create User Provider
     */
    private readonly createUserProvider: CreateUserProvider,
    /*
     * Inject Find One User by Email Provider
     */
    private readonly findOneByEmailProvider: FindOneUserByEmailProvider,
    /*
     * Inject Find One User by Google :ID
     */
    private readonly findOneByGoogleIdProvider: FindOneByGoogleIdProvider,
  ) {}

  onApplicationBootstrap(): any {
    console.log('Hello From Users');
  }

  public async createUser(createUserDto: CreateUserDto) {
    return this.createUserProvider.createUser(createUserDto);
  }

  /**
   * The method to get all users from the data.
   */
  public async findAll(
    getUsersParamDto: GetUsersParamDto,
    getUsersQuery: GetUsersQueryDto,
  ) {
    let users = await this.paginationProvider
      .paginateQuery(
        {
          limit: getUsersQuery.limit,
          page: getUsersQuery.page,
        },
        this.usersRepository,
      )
      .catch((err) => {
        throw new RequestTimeoutException(err.detail);
      });

    return users;
  }

  /**
   * The method to get user by id from the data.
   */
  public async findOneById(id: number) {
    const user = await this.usersRepository
      .findOneBy({
        id,
      })
      .catch((err) => {
        throw new RequestTimeoutException(
          'Unable to process your request at the moment please try later',
          {
            description: 'Error connecting to database',
          },
        );
      });

    /*
     * Handle the user does not exist
     */
    if (!user) {
      throw new BadRequestException();
    }

    return user;
  }

  public async createMany(createManyUsersDto: CreateManyUsersDto) {
    return await this.usersCreateManyProvider.createMany(createManyUsersDto);
  }

  public async findOneByEmail(email: string): Promise<User> {
    return await this.findOneByEmailProvider.findOneByEmail(email);
  }

  public async findOneByGoogleId(googleId: string): Promise<User> {
    return await this.findOneByGoogleIdProvider.findOneByGoogleId(googleId);
  }
}
