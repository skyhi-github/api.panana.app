import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('user')
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
