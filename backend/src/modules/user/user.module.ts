import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Film } from '../film/film.model';
import { FilmModule } from '../film/film.module';
import { Roles } from '../roles/roles.model';
import { RolesModule } from '../roles/roles.module';
import { UserRoles } from '../roles/user-roles.model';
import {Production} from "../production/production.model";
import {Review} from "../review/review.model";


@Module({
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Film, Roles, UserRoles, Production, Review]),
    FilmModule,
    RolesModule,
  ],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
