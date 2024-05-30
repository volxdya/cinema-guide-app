import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/userDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FavoriteDto } from './dto/favoriteDto';
import { RolesGuard } from '../auth/roles.guard';
import { RolesDecorator } from '../auth/roles.decorator';

@ApiTags('User')
@Controller('/user/')
export class UserController {
  constructor(private userService: UserService) {
  }

  @ApiOperation({
    summary: 'Создание пользователя',
  })
  @ApiResponse({
    status: 200,
    type: UserDto,
  })
  @Post('/create')
  create(@Body() userDto: UserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({
    summary: 'Получение всех пользователей',
  })
  @ApiResponse({
    status: 200,
    type: [UserDto],
  })

  @RolesDecorator('ADMIN')
  @UseGuards(RolesGuard)
  @Get('/get_all')
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({
    summary: 'Получение одного пользователя по логину',
  })

  @ApiResponse({
    status: 200,
    type: UserDto,
  })

  @Get('/get_by_login/:login')
  get_by_login(@Param('login') login: string) {
    return this.userService.getOneUser(login);
  }

  @ApiOperation({
    summary: 'Получение случайного пользователя',
  })

  @ApiResponse({
    status: 200,
    type: UserDto,
  })

  @Get(`/get_random_user`)
  get_random_user(){
    return this.userService.getCountAllUsers();
  }

  @ApiOperation({
    summary: 'Добавление фильма в избранное',
  })

  @ApiResponse({
    status: 200,
    type: UserDto,
  })

  @Post(`/add_favorite`)
  addFavorite(@Body() favoriteDto: FavoriteDto){
    return this.userService.addFavorite(favoriteDto.userId, favoriteDto.filmId)
  }
}