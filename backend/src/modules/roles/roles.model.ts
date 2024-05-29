import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IRoles {
  title: string;
}


@Table({tableName: 'roles'})
export class Roles extends Model<Roles, IRoles>{
  @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, unique: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false, unique: true})
  title: string;

}