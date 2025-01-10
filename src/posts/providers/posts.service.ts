import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
import { MetaOption } from '../../meta-options/meta-option.entity';

@Injectable()
export class PostsService {
  constructor(
    private readonly userService: UsersService,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    /*
     * Inject MetaOptions Repository
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public findAll(userId: string) {
    const user = this.userService.findOneById(userId);
    return [
      {
        user,
        title: 'test post',
        content: 'Test Content',
      },
      {
        user,
        title: 'test Post 2',
        content: 'Test Content 2',
      },
    ];
  }

  /*
   * Creating new Post
   */
  public async create(createPostDto: CreatePostDto) {
    // Create MetaOptions
    let metaOptions = createPostDto.metaOptions
      ? this.metaOptionsRepository.create(createPostDto.metaOptions)
      : null;

    if (metaOptions) {
      await this.metaOptionsRepository.save(metaOptions);
    }
    // Create post

    let post = this.postRepository.create(createPostDto);
    // Add metaOptions in the post

    if (metaOptions) {
      post.metaOptions = metaOptions;
    }
    // return post to the user

    return this.postRepository.save(post);
  }
}
