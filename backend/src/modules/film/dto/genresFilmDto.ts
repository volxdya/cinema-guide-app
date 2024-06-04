import { ApiProperty } from '@nestjs/swagger';

export class GenresFilmDto {
  @ApiProperty({
    description: "id фильма",
    example: '1'
  })
  readonly filmId: number;
  @ApiProperty({
    description: "id жанра",
    example: '1'
  })
  readonly genreId: number;
}