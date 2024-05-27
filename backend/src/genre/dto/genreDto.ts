import { ApiProperty } from '@nestjs/swagger';

export class GenreDto {

  @ApiProperty({
    description: 'Название жанра',
    example: "Боевик"
  })
  readonly title: string;
}