import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
import { MetaOption } from '../../meta-options/meta-option.entity';
import { TagsService } from '../../tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';

@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    private readonly userService: UsersService,
    /*
     * Injecting Tags Service
     */
    private readonly tagsService: TagsService,
    /*
     * Injecting postsRepository
     */
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    /*
     * Inject MetaOptions Repository
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async findAll(userId: number) {
    let posts = await this.postRepository.find({});

    return posts;
  }

  /*
   * Creating new Post
   */
  public async create(createPostDto: CreatePostDto) {
    //Find author from DB based on authorId
    let author = await this.userService.findOneById(createPostDto.authorId);

    // Find tags
    let tags = await this.tagsService.findTags(createPostDto.tags);

    // Create post

    let post = this.postRepository.create({
      ...createPostDto,
      author,
      tags,
    });

    return this.postRepository.save(post);
  }

  public async update(patchPostDto: PatchPostDto) {
    // Find the Tags
    let tags = await this.tagsService.findTags(patchPostDto.tags);

    // Find th Post
    let post = await this.postRepository.findOneBy({ id: patchPostDto.id });

    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.slug = patchPostDto.slug ?? post.slug;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;

    // Assign the new tags
    post.tags = tags;
    // Save the post and return

    return await this.postRepository.save(post);
  }

  /*
   * Delete Post by :id
   */
  public async delete(id: number) {
    await this.postRepository.delete(id);
    // confirmation
    return { deleted: true, id };
  }
}
