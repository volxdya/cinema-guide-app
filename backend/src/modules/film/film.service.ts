import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Film } from './film.model';
import { FilmDto } from './dto/filmDto';
import { GenreService } from '../genre/genre.service';

@Injectable()

export class FilmService {
  constructor(
    @InjectModel(Film)
    private readonly filmService: typeof Film,
    private readonly genreService: GenreService,
  ){}

  async create(dto: FilmDto): Promise<Film> {
    const film = await this.filmService.create(dto);

    return film;
  }

  async getOne(id: number) {
    const film = await this.filmService.findOne({ where: { id } });

    return film;
  }

  async getAll() {
    const films = await this.filmService.findAll();

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
