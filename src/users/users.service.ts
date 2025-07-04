import { Injectable } from '@nestjs/common';

@Injectable()
export class yarn UserService {
  getHello(): string {
    return 'Hello World!';
  }
}
