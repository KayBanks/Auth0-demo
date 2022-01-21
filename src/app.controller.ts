import { Controller, Get,UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorizationGuard } from './authorization/authorization.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @UseGuards(AuthorizationGuard)
  @Get("private")
  getPrivate(): string {
    return this.appService.getPrivate();
  }
  
  
  @Get("public")
  getPublic(): string {
    return this.appService.getPublic();
  }
}
