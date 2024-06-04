import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Film } from '../film/film.model';
import { FilmGenres } from './film-genres.model';
import {ApiProperty} from "@nestjs/swagger";

interface IGenre {
  title: string;
  id: number;
}

@Table({tableName: 'genre', createdAt: false, updatedAt: false})
export class Genre extends Model<Genre, IGenre>{

  @ApiProperty({example: 'Боевик', description: 'Уникальное название жанра'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  title: string;

  @ApiProperty({example: '1', description: 'Уникальный id жанра'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: '[film1, film2, ...filmN]', description: 'Массив фильмов жанра'})
  @BelongsToMany(() => Film, () => FilmGenres)
  films: Film[]
}