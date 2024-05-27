import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';

interface IGenre {
  title: string;
  id: number;
}

@Table({tableName: 'genre'})

export class Genre extends Model<Genre, IGenre>{
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  title: string;

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
}