import { ApiProperty } from '@nestjs/swagger';

export class RolesDto {

  @ApiProperty({
    description: "Название роли",
  })
  readonly tilte: string;
}