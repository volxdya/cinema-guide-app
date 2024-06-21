import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import {User} from "../user/user.model";
import {Film} from "../film/film.model";
import {ApiProperty} from "@nestjs/swagger";

interface IProduction {
  title: string;
  description: string;
  image: string;
}

@Table({ tableName: 'production' })
export class Production extends Model<Production, IProduction> {
    @ApiProperty({example: '1', description: 'Уникальный prodcution id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'productionzxc', description: 'Уникальный production title'})
    @Column({type: DataType.STRING, unique: true})
    title: string;

    @ApiProperty({example: 'Крутое описание', description: 'Описание продакшена'})
    @Column({type: DataType.STRING})
    description: string;

    @ApiProperty({example: 'http://i.bb/zxchahahaha', description: 'Ссылка до аватарки продакшена'})
    @Column({type: DataType.STRING, unique: true})
    image: string;

    @ApiProperty({example: '1', description: 'Владелец продакшена'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ApiProperty({example: '[owner1, owner2, ...ownerN]', description: 'Владелец продакшена'})
    @BelongsTo(() => User)
    owner: User

    @ApiProperty({example: '[film1, film2, ...filmN]', description: 'Массив фильмов продакшена'})
    @HasMany(() => Film)
    films: Film[];

}
