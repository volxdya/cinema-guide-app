import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/userDto';

@Controller('/user/')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  create(@Body() userDto: UserDto){
    return this.userService.createUser(userDto);
  }

  @Get('/get_all')
  getAll() {
    return this.userService.getAllUsers()
  }
}
