import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesDto } from './dto/rolesDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller('/roles/')
export class RolesController {

  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({summary: "Создание роли"})
  @ApiResponse({
    status: 200,
    type: RolesDto
  })
  @Post(`/create`)
  create(@Body() dto: RolesDto){
    return this.rolesService.create(dto);
  }

  @ApiOperation({summary: "Получение роли по названию"})
  @ApiResponse({
    status: 200,
    type: RolesDto
  })
  @Get('/get_by_title/:title')
  get_by_title(@Param('title') title: string) {
    return this.rolesService.getByTitle(title);
  }

  @ApiOperation({summary: "Получение роли по id"})
  @ApiResponse({
    status: 200,
    type: RolesDto
  })
  @Get('/get_by_id/:id')
  get_by_id(@Param('id') id: number) {
    return this.rolesService.getById(id);
  }

  @ApiResponse({
    status: 200,
    type: [RolesDto]
  })
  @ApiOperation({summary: "Получение массива всех ролей"})
  @Get('/get_all')
  getAll() {
    return this.rolesService.getAll();
  }
}
