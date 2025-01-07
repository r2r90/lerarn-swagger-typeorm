import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dto/get-users-param.dto";
import { AuthService } from "../../auth/providers/auth.service";

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
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * The method to get all users from the data.
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
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
