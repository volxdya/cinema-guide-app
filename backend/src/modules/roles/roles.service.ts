import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './roles.model';
import { Model } from 'sequelize-typescript';
import { RolesDto } from './dto/rolesDto';
import { Genre } from '../genre/genre.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Roles) private readonly roleModel: typeof Roles) {
  }

  async create(dto: RolesDto) {
    const role = await this.roleModel.create(dto);

    return role;
  }

  async getByTitle(title: string) {
    const role = await this.roleModel.findOne({ where: { title } });

    return role;
  }

  async getById(roleId: number) {
    const role = await this.roleModel.findOne({ where: { id: roleId } });

    return role;
  }

  async getAll() {
    const roles = await this.roleModel.findAll();

    return roles;
  }
}
