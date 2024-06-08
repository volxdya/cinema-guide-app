import { ApiProperty } from '@nestjs/swagger';

export class GenreDto {

  @ApiProperty({
    description: 'Название жанра',
    example: "Боевик"
  })
  readonly title: string;

  @ApiProperty({
    description: 'Картинка жанра',
    example: "http://ibb.com/qwer9okqweoikr"
  })
  readonly image: string;
}