import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserEntity } from 'src/typeorm';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';

@Module({
  imports:[AuthModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController,],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
