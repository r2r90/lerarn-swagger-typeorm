import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostTypeEnum } from '../enums/post-type.enum';
import { PostStatusEnum } from '../enums/post-status.enum';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export type MetaOptions = {};

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @ApiProperty({
    description: 'This is the title of the Post',
  })
  title: string;

  @ApiProperty({
    enum: PostTypeEnum,
    description: "Possible values 'post', 'page', 'story', 'series'",
  })
  @IsNotEmpty()
  @IsEnum(PostTypeEnum)
  postType: PostTypeEnum;

  @ApiProperty({
    description: "For example - 'my-url'",
    example: 'my-url',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example: my-url',
  })
  slug: string;

  @ApiProperty({
    enum: PostStatusEnum,
    description: "Possible values 'draft', 'scheduled', 'review', 'published'",
  })
  @IsNotEmpty()
  @IsEnum(PostStatusEnum)
  status: PostStatusEnum;

  @ApiPropertyOptional({
    description: 'This is a content of the Post',
    example: 'The post content',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will be thrown',
    example:
      '{\r\n "@context": "https:\/\/schema.org", \r\n "@type": "Person"\r\n}',
  })
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    description: 'Featured image for your blog post',
    example: 'http://localhost.com/images/image1.jpg',
  })
  @IsUrl()
  @IsOptional()
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description: 'The date on which blog post is published',
    example: '2024-03-16T07:46:32+0000',
  })
  @IsOptional()
  @IsISO8601()
  publishOn?: Date;

  @ApiPropertyOptional({
    description: 'Array of tags passed as string values',
    example: ['nestjs', 'typescript'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description: 'The key can be any string for your meta options.',
          example: 'sidebarEnabled',
        },
        value: {
          type: 'any',
          description: 'Any value that you want to save to the key.',
          example: true,
        },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
