import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Film } from './film.model';

interface IFavorite {
  userId: number;
  filmId: number;
}

@Table({tableName: 'favorites_film', createdAt: false, updatedAt: false})
export class Favorites extends Model<Favorites, IFavorite>{
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @ForeignKey(() => Film)
  @Column({type: DataType.INTEGER})
  filmId: number;
}