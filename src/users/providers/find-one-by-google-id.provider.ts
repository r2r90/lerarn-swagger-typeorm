import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';

@Injectable()
export class FindOneByGoogleIdProvider {
  constructor(
    /*
     *  Inject Users repository
     */
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  public findOneByGoogleId(googleId: string): Promise<User> {
    return this.usersRepository.findOneBy({
      googleId,
    });
  }
}
