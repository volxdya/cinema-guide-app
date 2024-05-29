import { Body, Controller, Post } from '@nestjs/common';
import { FilmDto } from './dto/filmDto';
import { FilmService } from './film.service';

@Controller('/film/')
export class FilmController {

  constructor(private readonly filmService: FilmService) {}

  @Post('/create')
  createFilm(@Body() dto: FilmDto){
    return this.filmService.create(dto);
  }
}
