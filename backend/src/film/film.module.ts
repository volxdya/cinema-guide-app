import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';

@Module({
  providers: [FilmService],
  controllers: [FilmController],
  exports: [FilmService],
  imports: []
})
export class FilmModule {}
