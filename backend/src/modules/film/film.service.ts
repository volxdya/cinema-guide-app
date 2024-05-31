import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Film } from './film.model';
import { FilmDto } from './dto/filmDto';
import { GenreService } from '../genre/genre.service';
import { Genre } from '../genre/genre.model';

@Injectable()

export class FilmService {
  constructor(
    @InjectModel(Film)
    private readonly filmService: typeof Film,
    private readonly genreService: GenreService,
  ) {
  }

  async create(dto: FilmDto): Promise<Film> {
    const film = await this.filmService.create(dto);
    const genre = await this.genreService.getOneGenre(dto.genreTitle);

    await film.$add('Genres', [genre]);

    return film;
  }

  async getOne(id: number) {
    const film = await this.filmService.findOne({ where: { id } });

    return film;
  }

  async getAll() {
    const films = await this.filmService.findAll({ include: [Genre] });

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

  async getRandomFilm() {
    function getRandom(max: number): number {
      return Math.floor(Math.random() * max);
    }

    const count = (await this.filmService.findAll()).length;
    let film = await this.filmService.findOne({ where: { id: getRandom(count) } });

    while (!film) {
      film = await this.filmService.findOne({ where: { id: getRandom(count) } });
    }

    return film;
  }

  async update(id: number, dto: FilmDto) {

    const film = await this.filmService.findOne({ where: { id: id } });

    await film.update({
      title: dto.title,
      description: dto.description,
      image: dto.image,
      revenue: dto.revenue,
      budget: dto.budget,
      year: dto.year,
      time: dto.time,
      rating: dto.rating,
    });

    return film;
  }

  async delete(id: number){
    const film = await this.filmService.destroy({ where: { id: id } });

    return film;
  }
}
