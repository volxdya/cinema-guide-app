import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType, ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Genre } from '../genre/genre.model';
import { FilmGenres } from '../genre/film-genres.model';
import { User } from '../user/user.model';
import { Favorites } from './favorites.model';
import {Production} from "../production/production.model";
import {ApiProperty} from "@nestjs/swagger";

interface IFilm {
  title: string;
  description: string;
  image: string;
  budget: number;
  revenue: number;
  time: number;
  year: number;
  rating: number;
}

@Table({ tableName: 'film', updatedAt: false, createdAt: false })
export class Film extends Model<Film, IFilm> {
  @ApiProperty({example: "Час пик", description: "Уникальный film title"})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;


  @ApiProperty({example: "12", description: "Уникальный film id"})
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: "Крутой фильмецкий", description: "Описание фильма"})
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({example: "ibb.com/good_picture", description: "Ссылка на картинку фильма"})
  @Column({ type: DataType.STRING, allowNull: false })
  image: string;

  @ApiProperty({example: "150000", description: "Выручка с фильма"})
  @Column({ type: DataType.INTEGER, allowNull: false })
  revenue: number;

  @ApiProperty({example: "20000", description: "Бюджет фильма"})
  @Column({ type: DataType.INTEGER, allowNull: false })
  budget: number;

  @ApiProperty({example: "2019", description: "Год выпуска фильма"})
  @Column({ type: DataType.INTEGER, allowNull: false })
  year: number;

  @ApiProperty({example: "Длительность фильма в минутах", description: "120"})
  @Column({ type: DataType.DOUBLE, allowNull: false })
  time: number;

  @ApiProperty({example: "9,4", description: "Рейтинг фильма"})
  @Column({ type: DataType.FLOAT, allowNull: false })
  rating: number;

  @ApiProperty({example: "[genre1, genre2, ...genreN]", description: "Массив жанров фильма"})
  @BelongsToMany(() => Genre, () => FilmGenres)
  genres: Genre[];

  @ApiProperty({example: "[user1, user2, ...userN]", description: "Массив юзеров, которые добавили этот фильм в избранное"})
  @BelongsToMany(() => User, () => Favorites)
  users: User[];

  @ApiProperty({example: "1", description: "Id продакшена, которому принадлежит этот фильм"})
  @ForeignKey(() => Production)
  @Column({type: DataType.INTEGER})
  productionId: number;

  @ApiProperty({example: "[production1, production2, ...produdctionN]", description: "Массив продакшенов, которым принадлежит этот фильм"})
  @BelongsTo(() => Production)
  productions: Production[];
}
