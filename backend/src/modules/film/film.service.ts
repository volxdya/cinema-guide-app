import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Film } from './film.model';
import { FilmDto } from './dto/filmDto';
import { GenreService } from '../genre/genre.service';
import { Genre } from '../genre/genre.model';

@Injectable()

export class FilmService {
  constructor(@InjectModel(Film) private readonly filmService: typeof Film,
                // private readonly genreService: typeof GenreService,
              ) {}
  async create(dto: FilmDto): Promise<Film> {
    const film = await this.filmService.create(dto);

    return film;
  }

}
