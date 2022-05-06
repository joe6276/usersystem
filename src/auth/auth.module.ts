import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm';
import { UserService } from 'src/user/services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { JwtStrategy } from './Strategy/jwt.strategy';
import { LocalStrategy } from './Strategy/local.strategy';

@Module({
  imports:[PassportModule,TypeOrmModule.forFeature([UserEntity]),JwtModule.register({
    secret:'samidoh',
    signOptions:{expiresIn:'24h'}
  }) ],
  providers: [AuthService, UserService,LocalStrategy,JwtStrategy],
  exports:[AuthService]
})


export class AuthModule {}
