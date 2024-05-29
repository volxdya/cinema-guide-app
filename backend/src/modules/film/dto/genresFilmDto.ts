import { ApiProperty } from '@nestjs/swagger';

export class GenresFilmDto {
  @ApiProperty({
    description: "id фильма",
  })

  readonly filmId: number;

  @ApiProperty({
    description: "id жанра",
  })
  readonly genreId: number;
}