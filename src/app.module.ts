import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigService,ConfigModule} from '@nestjs/config'
import { AuthorizationModule } from './authorization/authorization.module';
@Module({
  imports: [ConfigModule, AuthorizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
