import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { HashingProvider } from '../../auth/providers/hashing.provider';

@Injectable()
export class CreateUserProvider {
  constructor(
    /*
     * Inject Users Repository
     */
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    /*
     * Inject Hashing Provider
     */
    private readonly hashingProvider: HashingProvider,
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
            description: err.detail,
          },
        );
      });
    // Handle exception

    if (existingUser) {
      throw new BadRequestException(
        'User already exists, please check your email address',
      );
    }

    let newUser = this.usersRepository.create({
      ...createUserDto,
      password: await this.hashingProvider.hashPassword(createUserDto.password),
    });

    newUser = await this.usersRepository.save(newUser).catch((err) => {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: err.detail,
        },
      );
    });
    return newUser;

    // Create a new user
  }
}
