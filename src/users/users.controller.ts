import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service'; // Adjust the import path as necessary
import { ApiTags } from '@nestjs/swagger';

@ApiTags('👤User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
