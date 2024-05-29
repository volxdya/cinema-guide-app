import { ApiProperty } from '@nestjs/swagger';
import { Genre } from '../../genre/genre.model';

export class FavoriteDto {

  @ApiProperty({
    description: "id пользователя",
  })
  readonly userId: number;

  @ApiProperty({
    description: "id фильма",
  })
  readonly filmId: number;
}