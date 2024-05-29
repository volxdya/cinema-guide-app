import { ApiProperty } from '@nestjs/swagger';

export class RolesDto {
  @ApiProperty({
    description: "Название роли",
    example: "Admin"
  })
  readonly title: string;
}