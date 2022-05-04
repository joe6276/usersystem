import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController,],
  providers: [UserService]
})
export class UserModule {}
