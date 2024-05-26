import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    return this.userService.getAllUsers();
  }

  @Get('/get_by_login/:login')
  get_by_login(@Param('login') login: string) {
    return this.userService.getOneUser(login);
  }
}
