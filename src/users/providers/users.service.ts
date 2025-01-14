import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  RequestTimeoutException
} from "@nestjs/common";
import { GetUsersParamDto } from "../dto/get-users-param.dto";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { ConfigType } from "@nestjs/config";
import profileConfig from "../config/profile.config";
import { UsersCreateManyProvider } from "./users-create-many.provider";
import { CreateManyUsersDto } from "../dto/create-many-users.dto";

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
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    // Check is user exists with same email
    const existingUser = await this.usersRepository
      .findOne({
        where: { email: createUserDto.email },
      })
      .catch((err) => {
        throw new RequestTimeoutException(
          'Unable to process your request at the moment please try later',
          {
            description: 'Error connecting to database',
          },
        );
      });
    // Handle exception

    if (existingUser) {
      throw new BadRequestException(
        'User already exists, please check your email address',
      );
    }

    let newUser = this.usersRepository.create(createUserDto);

    newUser = await this.usersRepository.save(newUser).catch((err) => {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error connecting to database',
        },
      );
    });
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
    throw new HttpException(
      {
        status: HttpStatus.MOVED_PERMANENTLY,
        error: 'The API endpoint does not exist',
        fileName: 'users.service.ts',
        lineNumber: 88,
      },
      HttpStatus.MOVED_PERMANENTLY,
      {
        cause: new Error(),
        description: 'Occurred because the API endpoint does not exist',
      },
    );
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
}
