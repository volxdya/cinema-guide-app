import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Genre } from '../genre/genre.model';

@Module({
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
