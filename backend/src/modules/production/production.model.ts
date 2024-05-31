import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    HasOne,
    Model,
    Table
} from 'sequelize-typescript';
import {User} from "../user/user.model";
import {Film} from "../film/film.model";
import {UserRoles} from "../roles/user-roles.model";

interface IProduction {
  title: string;
  description: string;
  image: string;
}

@Table({ tableName: 'production' })
export class Production extends Model<Production, IProduction> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true})
    title: string;

    @Column({type: DataType.STRING})
    description: string;

    @Column({type: DataType.STRING, unique: true})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    owner: User[]

    @HasMany(() => Film)
    films: Film[];
}
