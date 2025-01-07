import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly userService: UsersService) {}

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

  public create(createPostDto: CreatePostDto) {
    console.log(createPostDto);
  }
}
