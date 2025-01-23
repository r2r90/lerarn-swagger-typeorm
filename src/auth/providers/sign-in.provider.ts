import {
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto } from '../dto/sign-in.dto';
import { UsersService } from '../../users/providers/users.service';
import { HashingProvider } from './hashing.provider';
import { GenerateTokensProvider } from './generate-tokens.provider';

@Injectable()
export class SignInProvider {
  constructor(
    /*
     * Inject User Service
     */
    private readonly userService: UsersService,
    /*
     * Inject Hashing Provider
     */
    private readonly hashingProvider: HashingProvider,
    /*
     * Inject generate Token provider
     */
    private readonly generateTokensProvider: GenerateTokensProvider,
  ) {}

  public async signIn(signInDto: SignInDto) {
    // Find the user using email ID

    // Throw an exception user not found
    const user = await this.userService
      .findOneByEmail(signInDto.email)
      .catch((err) => {
        throw new RequestTimeoutException(err.detail);
      });

    // Compare password to the hash

    const isEqual: boolean = await this.hashingProvider
      .comparePassword(signInDto.password, user.password)
      .catch((err) => {
        throw new RequestTimeoutException(err.detail);
      });

    if (!isEqual) {
      throw new UnauthorizedException('Incorrect password');
    }

    return this.generateTokensProvider.generateTokens(user);
  }
}
