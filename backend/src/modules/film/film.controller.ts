import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FilmDto } from './dto/filmDto';
import { FilmService } from './film.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Film } from './film.model';

@ApiTags('Films')
@Controller('/film/')
export class FilmController {

  constructor(private readonly filmService: FilmService) {}
  @ApiOperation({
    summary: "Создание фильма"
  })

  @ApiResponse({
    status: 200,
    type: Film
  })
  @Post('/create')
  createFilm(@Body() dto: FilmDto){
    return this.filmService.create(dto);
  }

  @ApiOperation({
    summary: "Получение одного фильма по id"
  })

  @ApiResponse({
    status: 200,
    type: Film
  })

  @Get(`/get_one/:id`)
  getOne(@Param('id') id: number) {
    return this.filmService.getOne(id);
  }

  @ApiOperation({
    summary: "Получение массива всех фильмов"
  })

  @ApiResponse({
    status: 200,
    type: [Film]
  })

  @Get(`/get_all`)
  getAll() {
    return this.filmService.getAll();
  }

  @ApiOperation({
    summary: "Получение одного фильма по title"
  })

  @ApiResponse({
    status: 200,
    type: Film
  })

  @Get('/get_by_title/:title')
  getByTitle(@Param('title') title: string) {
    return this.filmService.getByTitle(title);
  }

  @Get('/get_random')
  getRandom() {
    return this.filmService.getRandomFilm();
  }

}
