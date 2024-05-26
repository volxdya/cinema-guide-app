import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/userDto';

@Controller('/auth/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(`/login`)
  login(@Body() userDto: UserDto) {
    return this.authService.login(userDto);
  }
}
