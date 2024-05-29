import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Genre } from './genre.model';
import { Film } from '../film/film.model';

interface IFilmGenresModel {
  filmId: number;
  genreId: number;

}
@Table({tableName: 'film-genre'})
export class FilmGenres extends Model<FilmGenres, IFilmGenresModel>{
  @Column({type: DataType.INTEGER, unique: true, allowNull: false, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Film)
  @Column({type: DataType.INTEGER})
  filmId: number;

  @ForeignKey(() => Genre)
  @Column({type: DataType.INTEGER})
  genreId: number;
}