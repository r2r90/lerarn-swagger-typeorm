import {
  BadRequestException,
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreatePostDto } from '../dtos/create-post.dto';
import { TagsService } from '../../tags/providers/tags.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { UsersService } from '../../users/providers/users.service';

@Injectable()
export class CreatePostProvider {
  constructor(
    private readonly tagsService: TagsService,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly userService: UsersService,
  ) {}

  public async create(createPostDto: CreatePostDto, user: ActiveUserData) {
    let author = undefined;
    let tags = undefined;
    //Find author from DB based on authorId

    try {
      author = await this.userService.findOneById(user.sub);
      tags = await this.tagsService.findTags(createPostDto.tags);
    } catch (err) {
      throw new ConflictException(err);
    }

    console.log(tags.length);

    if (createPostDto.tags.length !== tags.length) {
      throw new BadRequestException('Please check your tag ids');
    }


    const post = this.postRepository.create({
      ...createPostDto,
      author,
      tags,
    });

    return await this.postRepository.save(post).catch((err) => {
      throw new RequestTimeoutException(err.detail);
    });
  }
}
