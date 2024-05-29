import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import * as process from 'node:process';
import { UserModule } from '../user/user.module';
import { User } from '../user/user.model';
import { Genre } from '../genre/genre.model';
import { Film } from '../film/film.model';
import { AuthModule } from '../auth/auth.module';
import { GenreModule } from '../genre/genre.module';
import { FilmModule } from '../film/film.module';
import { FilmGenres } from '../genre/film-genres.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadModels: true,
      models: [User, Genre, Film, FilmGenres],
    }),
    UserModule,
    AuthModule,
    GenreModule,
    FilmModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
