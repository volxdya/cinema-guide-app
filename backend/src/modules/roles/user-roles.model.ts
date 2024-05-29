import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Role } from './roles.model';

interface IUserRoles {
  userId: number;
  roleId: number;
}

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles, IUserRoles>{
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @ForeignKey(() => Role)
  @Column({type: DataType.INTEGER})
  roleId: number;
}