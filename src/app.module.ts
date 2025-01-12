import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from './config';
import environementValidation from './config/environement.validation';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    UsersModule,
    PostsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      //envFilePath: ['.env.development'],
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      load: configurations,
      validationSchema: environementValidation,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities: configService.get('dbConfig.autoloadEntities'),
        synchronize: configService.get('dbConfig.synchronize'),
        port: +configService.get('dbConfig.port'),
        username: configService.get('dbConfig.username'),
        password: configService.get('dbConfig.password'),
        host: configService.get('dbConfig.host'),
        database: configService.get('dbConfig.name'),
      }),
    }),
    TagsModule,
    MetaOptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
