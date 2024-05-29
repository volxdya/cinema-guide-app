import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Film } from '../film/film.model';
import { FilmModule } from '../film/film.module';
import { RolesModule } from '../roles/roles.module';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

@Module({
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Film, Role, UserRoles]),
    FilmModule,
    RolesModule
  ],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
