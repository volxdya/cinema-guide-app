import {Column, DataType, Model, Table} from 'sequelize-typescript';

interface IProduction {
  title: string;
  description: string;
  image: string;
}

@Table({ tableName: 'Production' })
export class Production extends Model<Production, IProduction> {
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    title: string;

    @Column({type: DataType.INTEGER, allowNull: false, unique: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    image: string;
}
