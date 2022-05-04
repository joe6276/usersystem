import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './config/Cofig';

import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot(Config)],
  controllers: [],
  providers: [],
})
export class AppModule {}

