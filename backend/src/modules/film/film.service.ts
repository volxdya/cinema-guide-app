import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Film } from './film.model';
import { FilmDto } from './dto/filmDto';
import { GenreService } from '../genre/genre.service';
import { GenresFilmDto } from './dto/genresFilmDto';
import { Genre } from '../genre/genre.model';

@Injectable()

export class FilmService {
  constructor(
    @InjectModel(Film)
    private readonly filmService: typeof Film,
    private readonly genreService: GenreService,
  ){}

  async create(dto: FilmDto): Promise<Film> {
    const film = await this.filmService.create(dto);
    const genre = await this.genreService.getOneById(dto.genreId);

    await film.$add('Genres', [genre]);

    return film;
  }

  async getOne(id: number) {
    const film = await this.filmService.findOne({ where: { id } });

    return film;
  }

  async getAll() {
    const films = await this.filmService.findAll({include: [Genre]});

    return films;
  }

  async getByTitle(title: string) {
    const film = await this.filmService.findOne({ where: { title } });

    if (!film) {
      throw new HttpException({ message: 'Не найдено' }, 404);
    } else {
      return film;
    }
  }
}