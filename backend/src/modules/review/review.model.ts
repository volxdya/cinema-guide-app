import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";
import {Film} from "../film/film.model";

interface IReview {
    text: string;
    rating: number;
}

@Table({tableName: 'review'})
export class Review extends Model<Review, IReview>{
    @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    text: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    rating: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ForeignKey(() => Film)
    @Column({type: DataType.INTEGER})
    filmId: number;
}