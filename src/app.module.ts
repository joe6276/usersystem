import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './config/Cofig';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UserModule,TypeOrmModule.forRoot(Config), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

