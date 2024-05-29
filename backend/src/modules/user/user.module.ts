import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Film } from '../film/film.model';
import { FilmModule } from '../film/film.module';

@Module({
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Film]),
    FilmModule
  ],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
