import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service'; // Adjust the import path as necessary

@Controller('user')
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
