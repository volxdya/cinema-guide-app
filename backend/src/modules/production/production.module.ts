import { Module } from '@nestjs/common';
import { ProductionService } from './production.service';
import { ProductionController } from './production.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Production} from "./production.model";

@Module({
  providers: [ProductionService],
  controllers: [ProductionController],
  imports: [SequelizeModule.forFeature([Production])],
})
export class ProductionModule {}
