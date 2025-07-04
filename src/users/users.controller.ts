import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('users')
export class UsersController {

  @Get()
  getHello(): string {
    return 'hello';
  }
}
