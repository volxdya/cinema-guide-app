import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { UserRoles } from './user-roles.model';
import {ApiProperty} from "@nestjs/swagger";


interface IRoles {
  title: string;
}


@Table({tableName: 'roles', updatedAt: false, createdAt: false})
export class Roles extends Model<Roles, IRoles>{
  @ApiProperty({example: '1', description: 'Уникальный role id'})
  @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, unique: true, primaryKey: true})
  id: number;

  @ApiProperty({example: '1', description: 'Уникальный role title'})
  @Column({type: DataType.STRING, allowNull: false, unique: true})
  title: string;

  @ApiProperty({example: '[user1, user2... userN]', description: 'Пользователи'})
  @BelongsToMany(() => User, () => UserRoles)
  user: User[]
}