import { Body, Controller, Post } from '@nestjs/common';
import { GoogleAuthService } from './providers/google-auth.service';
import { GoogleTokenDto } from './dto/google-token.dto';
import { Auth } from '../decorators/auth.decorator';
import { AuthType } from '../enums/auth-type.enum';

@Auth(AuthType.None)
@Controller('auth/google-authentication')
export class GoogleAuthController {
  constructor(
    /*
     *  Inject Google Auth Service
     */

    private readonly googleAuthenticationService: GoogleAuthService,
  ) {}

  @Post()
  authenticate(@Body() googleTokenDto: GoogleTokenDto) {
    return this.googleAuthenticationService.authenticate(googleTokenDto);
  }
}
