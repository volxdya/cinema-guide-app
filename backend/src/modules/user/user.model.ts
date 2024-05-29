import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Genre } from '../genre/genre.model';
import { Film } from '../film/film.model';
import { Favorites } from '../film/favorites.model';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

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

  @BelongsToMany(() => Film, () => Favorites)
  favorites: Film[]

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]
}