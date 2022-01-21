import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getPrivate(): string {
    return 'this is a private route!';
  }
  getPublic(): string {
    return 'this is a public route';
  }
}
