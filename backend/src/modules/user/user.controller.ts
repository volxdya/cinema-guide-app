import {Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/userDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FavoriteDto } from './dto/favoriteDto';
import { AuthGuard } from '../../guards/auth.guard';
import {CheckUserDto} from "./dto/checkUserDto";
import {Production} from "../production/production.model";

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
  // @RolesDecorator("ADMIN")
  // @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
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
  @Get('/get_by_id/:userId')
  getById(@Param('userId') userId: number) {
    return this.userService.getOneUserById(userId);
  }

  @UseGuards(AuthGuard)
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
  @UseGuards(AuthGuard)
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
  @UseGuards(AuthGuard)
  @Post(`/add_favorite`)
  addFavorite(@Body() favoriteDto: FavoriteDto){
    return this.userService.addFavorite(favoriteDto.userId, favoriteDto.filmId)
  }

  @ApiOperation({
    summary: 'Удаление фильма из избранного',
  })

  @ApiResponse({
    status: 200,
    type: UserDto,
  })
  @UseGuards(AuthGuard)
  @Post(`/delete_favorite`)
  deleteFavorite(@Body() favoriteDto: FavoriteDto){
    return this.userService.deleteFavorite(favoriteDto.userId, favoriteDto.filmId);
  }

  @ApiOperation({
    summary: "Обновление данных пользователя"
  })
  @ApiResponse({
    status: 200,
    type: UserDto,
  })
  @UseGuards(AuthGuard)
  @Put(`/update/:login`)
  update(@Body() userDto: UserDto, @Param('login') login: string) {
    return this.userService.update(login, userDto);
  }

  @ApiOperation({
    summary: "Удаление данных пользователя"
  })
  @ApiResponse({
    status: 200,
    type: UserDto,
  })
  @Delete('/delete/:id')
  delete(id: number) {
    return this.userService.delete(id);
  }

  @ApiOperation({
    summary: "Проверка, есть ли фильм в лайках пользователя"
  })

  @ApiResponse({
    status: 200,
    type: Boolean,
  })

  @UseGuards(AuthGuard)
  @Post(`/check_films_like`)
  checkFilmsLike(@Body() checkUserDto: CheckUserDto) {
    return this.userService.getUserFilms(checkUserDto);
  }
}