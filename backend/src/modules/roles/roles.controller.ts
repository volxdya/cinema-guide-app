import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesDto } from './dto/rolesDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GenreDto } from '../genre/dto/genreDto';
import { Role } from './roles.model';

@ApiTags('Roles')
@Controller('/roles/')
export class RolesController {

  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({
    summary: 'Создание новой роли',
  })

  @ApiResponse({
    status: 200,
    type: Role
  })
  @Post(`/create`)
  create(@Body() dto: RolesDto){
    return this.rolesService.create(dto);
  }


  @ApiOperation({
    summary: 'Получение массива ролей',
  })

  @ApiResponse({
    status: 200,
    type: [Role]
  })
  @Get('/get_all')
  getAll(){
    return this.rolesService.getAll();
  }


  @ApiOperation({
    summary: 'Получение роли по названию',
  })

  @ApiResponse({
    status: 200,
    type: Role
  })
  @Get('/get_by_title/:title')
  getByTitle(@Param('title') title: string){
    return this.rolesService.getByTitle(title);
  }
}
