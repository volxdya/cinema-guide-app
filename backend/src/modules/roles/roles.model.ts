import { BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { UserRoles } from './user-roles.model';


interface IRole {
  title: string;
}

@Table({tableName: 'user_roles'})
export class Role extends Model<Role, IRole>{
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  title: string;

  @Column({type: DataType.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true})
  id: number;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
}