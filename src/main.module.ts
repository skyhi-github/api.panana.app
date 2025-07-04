import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import 'dotenv/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: Boolean(process.env.DB_SYNC),
    }),
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public')
  }),
    UsersModule],
})
export class MainModule {}