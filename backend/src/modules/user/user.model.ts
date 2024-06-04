import {BelongsToMany, Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';
import { Film } from '../film/film.model';
import { Roles } from '../roles/roles.model';
import { Favorites } from '../film/favorites.model';
import { UserRoles } from '../roles/user-roles.model';
import {Production} from "../production/production.model";
import {ApiProperty} from "@nestjs/swagger";

interface IUser {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Table({tableName: 'users'})

export class User extends Model<User, IUser>{
  @ApiProperty({example: '1', description: 'Уникальный user id'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @ApiProperty({example: 'lagosta', description: 'Уникальный user login'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  login: string;

  @ApiProperty({example: 'Vladimir', description: 'Имя пользователя'})
  @Column({type: DataType.STRING, unique: false, allowNull: false})
  firstName: string;

  @ApiProperty({example: 'Testov', description: 'Фамилия пользователя'})
  @Column({type: DataType.STRING, unique: false, allowNull: false})
  lastName: string;

  @ApiProperty({example: 'password123456', description: 'Пароль пользователя'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'Час пик', description: 'Избранные фильмы пользователя'})
  @BelongsToMany(() => Film, () => Favorites)
  favorites: Film[]

  @ApiProperty({example: 'User, ADMIN', description: 'Роли пользователя'})
  @BelongsToMany(() => Roles, () => UserRoles)
  roles: Roles[]

  @ApiProperty({example: 'Prod123', description: 'Продакшены пользователя'})
  @HasMany(() => Production)
  productions: Production[];
}