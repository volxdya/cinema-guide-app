import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Film } from './film.model';
import {ApiProperty} from "@nestjs/swagger";

interface IFavorite {
  userId: number;
  filmId: number;
}

@Table({tableName: 'favorites_film', createdAt: false, updatedAt: false})
export class Favorites extends Model<Favorites, IFavorite>{
  @ApiProperty({example: '1', description: 'Уникальный id избранного фильма'})
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: '1', description: 'Уникальный user id избранного фильма'})
  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @ApiProperty({example: '1', description: 'Уникальный id фильма'})
  @ForeignKey(() => Film)
  @Column({type: DataType.INTEGER})
  filmId: number;
}