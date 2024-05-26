import { ApiProperty } from '@nestjs/swagger';

export class UserDto {

  @ApiProperty({
    description: 'Логин пользователя',
    example: "user.login201"
  })
  readonly login: string;

  @ApiProperty({
    description: 'Имя пользователя',
    example: "Владимир"
  })
  readonly firstName: string;

  @ApiProperty({
    description: 'Фамилимя пользователя',
    example: "Тестов"
  })
  readonly lastName: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: "secret_password123456"
  })
  readonly password: string;
}