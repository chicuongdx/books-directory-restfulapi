import { AuthService } from './auth.service';
import { UserService } from './../users/users.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserService],
  providers: [AuthService],
})
export class AuthModule {}
