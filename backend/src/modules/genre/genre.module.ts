import { forwardRef, Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Genre } from './genre.model';
import { Film } from '../film/film.model';
import { FilmGenres } from './film-genres.model';
import { FilmModule } from '../film/film.module';

@Module({
  controllers: [GenreController],
  providers: [GenreService],
  imports: [SequelizeModule.forFeature([Genre, Film, FilmGenres])],
  exports: [
    GenreService,
  ]
})
export class GenreModule {}
