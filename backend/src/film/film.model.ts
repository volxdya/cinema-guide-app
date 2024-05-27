import { Column, DataType, Model, Table } from 'sequelize-typescript';

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

@Table({tableName: 'film'})
export class Film extends Model<Film, IFilm>{
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  title: string;

  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  description: string;

  @Column({type: DataType.STRING, allowNull: false})
  image: string;

  @Column({type: DataType.INTEGER, allowNull: false})
  revenue: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  budget: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  year: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  time: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  rating: number;

}