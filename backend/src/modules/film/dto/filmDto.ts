import { ApiProperty } from '@nestjs/swagger';
import { GenreDto } from '../../genre/dto/genreDto';

export class FilmDto {

  @ApiProperty({
    description: 'Название фильма',
    example: 'Час пик',
  })
  readonly title: string;

  @ApiProperty({
    description: 'Описание фильма',
    example: 'Крутой фильм!!!',
  })
  readonly description: string;

  @ApiProperty({
    description: 'Рейтинг фильма',
    example: '4.7',
  })
  readonly rating: number;

  @ApiProperty({
    description: 'Год выпуска фильма',
    example: '2017',
  })
  readonly year: number;

  @ApiProperty({
    description: 'Длительность фильма',
    example: '195',
  })
  readonly time: number;

  @ApiProperty({
    description: 'URL на сторонний API, где хрнаится картинка фильма',
    example: 'i.bb/....',
  })
  readonly image: string;

  @ApiProperty({
    description: 'Бюджет фильма',
    example: '195 111',
  })
  readonly budget: number;

  @ApiProperty({
    description: 'Выручка фильма',
    example: '2 154 661',
  })
  readonly revenue: number;

  @ApiProperty({
    description: 'Название жанра',
    example: 'Боевик',
  })
  readonly genreTitle: string;

  readonly productionId: number;
}