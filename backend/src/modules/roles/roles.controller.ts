import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesDto } from './dto/rolesDto';
import { FavoriteDto } from '../user/dto/favoriteDto';

@Controller('/roles/')
export class RolesController {

  constructor(private readonly rolesService: RolesService) {}

  @Post(`/create`)
  create(@Body() dto: RolesDto){
    return this.rolesService.create(dto);
  }

  @Get('/get_by_title/:title')
  get_by_title(@Param('title') title: string) {
    return this.rolesService.getByTitle(title);
  }

  @Get('/get_by_id/:id')
  get_by_id(@Param('id') id: number) {
    return this.rolesService.getById(id);
  }

  @Get('/get_all')
  getAll() {
    return this.rolesService.getAll();
  }
}
