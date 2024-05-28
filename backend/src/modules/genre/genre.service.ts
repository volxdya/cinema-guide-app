import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './genre.model';
import { GenreDto } from './dto/genreDto';

@Injectable()
export class GenreService {
  constructor(@InjectModel(Genre) private readonly genreService: typeof Genre) {}

  async createGenre(dto: GenreDto): Promise<Genre> {
    const genre = await this.genreService.create(dto);

    return genre;
  }

  async getAllGenres(): Promise<Genre[]> {
    const genres = await this.genreService.findAll();

    return genres;
  }

  async getOneGenre(title: string): Promise<Genre> {
    const genre = await this.genreService.findOne({ where: { title } });

    return genre;
  }
}
