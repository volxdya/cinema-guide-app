import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/userDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../user/user.model';

@ApiTags('Auth')
@Controller('/auth/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'JWT-Authentication',
    description: 'Авторизация пользователя (лог + пароль) через jwt-токены',
  })
  @Post(`/login`)
  login(@Body() userDto: UserDto) {
    return this.authService.login(userDto);
  }
}
