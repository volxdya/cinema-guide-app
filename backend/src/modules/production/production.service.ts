import { Injectable } from '@nestjs/common';
import {ProductionDto} from "./dto/ProductionDto";
import {InjectModel} from "@nestjs/sequelize";
import {Production} from "./production.model";

@Injectable()
export class ProductionService {
    constructor(@InjectModel(Production) private readonly productionService: typeof Production) {}


    async create(dto: ProductionDto) {
        const production = await this.productionService.create(dto);

        return production;
    }

    async getAll() {
        const productions = await this.productionService.findAll();

        return productions;
    }

    async getOneById(id: number){
        const production = await this.productionService.findOne({where: { id }});

        return production;
    }

    async getOneByTitle(title: string) {
        const production = await this.productionService.findOne({where: { title }});

        return production;
    }
}
