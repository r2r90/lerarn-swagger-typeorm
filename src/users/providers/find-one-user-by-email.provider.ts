import {
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';

@Injectable()
export class FindOneUserByEmailProvider {
  constructor(
    /*
     * Inject Repository User
     */
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async findOneByEmail(email: string): Promise<User> {
    const user = await this.userRepository
      .findOneBy({ email: email })
      .catch((err) => {
        throw new RequestTimeoutException(err.detail);
      });

    if (!user) {
      throw new UnauthorizedException('User does not exist');
    }

    return user;
  }
}
