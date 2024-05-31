import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { Genre } from '../genre/genre.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Film } from './film.model';
import { FilmGenres } from '../genre/film-genres.model';
import { GenreModule } from '../genre/genre.module';
import { User } from '../user/user.model';
import {Production} from "../production/production.model";

@Module({
  providers: [FilmService],
  controllers: [FilmController],
  imports: [
    SequelizeModule.forFeature([Genre, Film, FilmGenres, User, Production]),
    GenreModule,
  ],
  exports: [FilmService],
})
export class FilmModule {}
