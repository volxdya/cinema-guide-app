import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { UserRoles } from './user-roles.model';


interface IRoles {
  title: string;
}


@Table({tableName: 'roles', updatedAt: false, createdAt: false})
export class Roles extends Model<Roles, IRoles>{
  @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, unique: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, unique: true})
  title: string;

  @BelongsToMany(() => User, () => UserRoles)
  user: User[]
}