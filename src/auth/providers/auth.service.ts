import { Injectable } from '@nestjs/common';
import { SignInDto } from '../dto/sign-in.dto';
import { SignInProvider } from './sign-in.provider';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
import { RefreshTokensProvider } from './refresh-tokens.provider';

@Injectable()
export class AuthService {
  constructor(
    private readonly signInProvider: SignInProvider,
    private readonly refreshTokesProvider: RefreshTokensProvider,
  ) {}

  public async signIn(signInDto: SignInDto) {
    return await this.signInProvider.signIn(signInDto);
  }

  public async refreshTokens(refreshTokenDto: RefreshTokenDto) {
    return await this.refreshTokesProvider.refreshTokens(refreshTokenDto);
  }
}
