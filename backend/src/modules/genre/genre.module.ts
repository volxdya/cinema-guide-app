import { Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Genre } from './genre.model';
import { User } from '../user/user.model';

@Module({
  controllers: [GenreController],
  providers: [GenreService],
  imports: [SequelizeModule.forFeature([Genre])],
  exports: [GenreService],
})
export class GenreModule {}
