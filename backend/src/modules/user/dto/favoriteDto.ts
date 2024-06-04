import { ApiProperty } from '@nestjs/swagger';
import { Genre } from '../../genre/genre.model';

export class FavoriteDto {

  @ApiProperty({
    description: "id пользователя",
    example: "1",
  })
  readonly userId: number;

  @ApiProperty({
    description: "id фильма",
    example: '1'
  })
  readonly filmId: number;
}