import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { RolesDto } from './dto/rolesDto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private readonly roleModel: typeof Role) {
  }

  async create(dto: RolesDto) {
      const role = await this.roleModel.create(dto);

      return role;
  }

  async getAll() {
    const roles = await this.roleModel.findAll();

    return roles;
  }

  async getByTitle(title: string){
    const role = await this.roleModel.findOne({ where: { title } });

    return role;
  }
}
