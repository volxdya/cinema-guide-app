import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Model } from 'sequelize-typescript';
import { UserDto } from './dto/userDto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: UserDto){
    const user = await this.userRepository.create(dto);

    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();

    return users;
  }

  async getOneUser(login: string) {
    const user = await this.userRepository.findOne({ where: { login } });

    return user;
  }

  async getOneUserById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    return user;
  }

  async getCountAllUsers(){
    function getRandomInt(max: number): number {
      return Math.floor(Math.random() * max);
    }

    const count = (await this.getAllUsers()).length;

    return this.getOneUserById(getRandomInt(count));
  }
}