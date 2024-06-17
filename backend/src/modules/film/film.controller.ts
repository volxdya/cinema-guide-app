import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {FilmDto} from './dto/filmDto';
import {FilmService} from './film.service';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {Film} from './film.model';
import {LimitDto} from "./dto/limitDto";

@ApiTags('Films')
@Controller('/film/')
export class FilmController {

    constructor(private readonly filmService: FilmService) {
    }

    @ApiOperation({
        summary: 'Создание фильма',
    })

    @ApiResponse({
        status: 200,
        type: FilmDto,
    })
    @Post('/create')
    createFilm(@Body() dto: FilmDto) {
        return this.filmService.create(dto);
    }

    @ApiOperation({
        summary: 'Получение одного фильма по id',
    })

    @ApiResponse({
        status: 200,
        type: FilmDto,
    })

    @Get(`/get_one/:id`)
    getOne(@Param('id') id: number) {
        return this.filmService.getOne(id);
    }

    @ApiOperation({
        summary: 'Получение массива всех фильмов',
    })

    @ApiResponse({
        status: 200,
        type: [FilmDto],
    })

    @Get(`/get_all`)
    getAll() {
        return this.filmService.getAll();
    }

    @ApiOperation({
        summary: 'Получение одного фильма по title',
    })

    @ApiResponse({
        status: 200,
        type: FilmDto,
    })

    @Get('/get_by_title/:title')
    getByTitle(@Param('title') title: string) {
        return this.filmService.getByTitle(title);
    }

    @ApiOperation({
        summary: 'Получение рандомного фильма',
    })

    @ApiResponse({
        status: 200,
        type: FilmDto,
    })

    @Get('/get_random')
    getRandom() {
        return this.filmService.getRandomFilm();
    }

    @ApiOperation({
        summary: 'Обновление одного фильма',
    })

    @ApiResponse({
        status: 200,
        type: FilmDto,
    })

    @Put(`/update/:id`)
    update(dto: FilmDto, id: number) {
        return this.filmService.update(id, dto);
    }

    @ApiOperation({
        summary: 'Удаление фильма',
    })

    @ApiResponse({
        status: 200,
        type: FilmDto,
    })

    @Delete('/delete/:id')
    delete(@Param('id') id: number) {
        return this.filmService.delete(id);
    }

    @ApiOperation({
        summary: 'Получение массива 10-ти фильмов',
    })

    @ApiResponse({
        status: 200,
        type: [FilmDto],
    })
    @Post(`/get_limit/`)
    getTenFilms(@Body() dto: LimitDto) {
        return this.filmService.getWithLimit(dto);
    }


    @ApiOperation({
        summary: 'Получение массива фильмов, по поиску инпута из фронтенда',
    })

    @ApiResponse({
        status: 200,
        type: [FilmDto],
    })

    @Get(`/search/:valueInput`)
    getBySearch(@Param('valueInput') valueInput: string) {
        return this.filmService.searchFilms(valueInput);
    }
}
