import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreDto } from './dto/genreDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FilmDto } from '../film/dto/filmDto';

@ApiTags('Genre')
@Controller('/genre/')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @ApiOperation({
    summary: "Создание жанра через админ-панель"
  })

  @ApiResponse({
    status: 200,
    type: GenreDto
  })
  // Чуть позже нужно сделать декоратор ролей, который будет ограничивать только для админов
  @Post(`/create`)
  create(@Body() genreDto: GenreDto) {
    return this.genreService.createGenre(genreDto);
  }


  @ApiOperation({
    summary: "Получение массива всех жанров"
  })
  @ApiResponse({
    status: 200,
    type: [GenreDto]
  })
  @Get(`/get_all`)
  getAll(){
    return this.genreService.getAllGenres();
  }

  @ApiOperation({
    summary: "Получение одного жанра по названию"
  })
  @ApiResponse({
    status: 200,
    type: GenreDto
  })
  @Get(`/get_one/:title`)
  getOne(@Param('title') title: string) {
    return this.genreService.getOneGenre(title);
  }

  @ApiOperation({
    summary: "Получение одного жанра по названию"
  })
  @ApiResponse({
    status: 200,
    type: GenreDto
  })

  @Get(`/get_one/:id`)
  getOneById(@Param('id') id: number) {
    return this.genreService.getOneById(id);
  }

  @ApiOperation({
    summary: "Получение фильмов по жанру"
  })
  @ApiResponse({
    status: 200,
    type: [FilmDto]
  })

  @Get('/get_film_by_genre/:title')
  getFilmByGenre(@Param('title') title: string) {
    return this.genreService.getFilmsByGenre(title);
  }
}
