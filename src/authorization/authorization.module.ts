import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import {AuthorizationGuard} from './authorization.guard'
import { ConfigModule } from '@nestjs/config';
@Module({
imports:[ConfigModule],
providers:[ConfigService,AuthorizationGuard ]
})
export class AuthorizationModule {}
