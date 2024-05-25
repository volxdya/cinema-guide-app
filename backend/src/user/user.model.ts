import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IUser {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Table({tableName: 'users'})

export class User extends Model<User, IUser>{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  login: string;

  @Column({type: DataType.STRING, unique: false, allowNull: false})
  firstName: string;

  @Column({type: DataType.STRING, unique: false, allowNull: false})
  lastName: string;

  @Column({type: DataType.STRING, allowNull: false})
  password: string;
}