import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FilmDto } from './dto/filmDto';
import { FilmService } from './film.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Films')
@Controller('/film/')
export class FilmController {

  constructor(private readonly filmService: FilmService) {}

  @Post('/create')
  createFilm(@Body() dto: FilmDto){
    return this.filmService.create(dto);
  }

  @Get(`/get_one/:id`)
  getOne(@Param('id') id: number) {
    return this.filmService.getOne(id);
  }

  @Get(`/get_all`)
  getAll() {
    return this.filmService.getAll();
  }

  @Get('/get_by_title/:title')
  getByTitle(@Param('title') title: string) {
    return this.filmService.getByTitle(title);
  }

}
