import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType, ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Genre } from '../genre/genre.model';
import { FilmGenres } from '../genre/film-genres.model';
import { User } from '../user/user.model';
import { Favorites } from './favorites.model';
import {Production} from "../production/production.model";

interface IFilm {
  title: string;
  description: string;
  image: string;
  budget: number;
  revenue: number;
  time: number;
  year: number;
  rating: number;
}

@Table({ tableName: 'film', updatedAt: false, createdAt: false })
export class Film extends Model<Film, IFilm> {
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({ type: DataType.STRING, allowNull: false })
  image: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  revenue: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  budget: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  year: number;

  @Column({ type: DataType.DOUBLE, allowNull: false })
  time: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  rating: number;

  @BelongsToMany(() => Genre, () => FilmGenres)
  genres: Genre[];

  @BelongsToMany(() => User, () => Favorites)
  users: User[];

  @ForeignKey(() => Production)
  @Column({type: DataType.INTEGER})
  productionId: number;

  @BelongsTo(() => Production)
  productions: Production[];
}
