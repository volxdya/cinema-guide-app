import { ApiProperty } from '@nestjs/swagger';
import { Genre } from '../../genre/genre.model';

export class FavoriteDto {
  readonly userId: number;
  readonly filmId: number;
}