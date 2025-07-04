import { Module } from '@nestjs/common';
import { AppController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService],
})
export class UsersModule {}
