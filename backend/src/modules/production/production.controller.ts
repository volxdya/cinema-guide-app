import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ProductionService} from "./production.service";
import {ProductionDto} from "./dto/ProductionDto";

@Controller('/production/')
export class ProductionController {
    constructor(private readonly productionService: ProductionService) {
    }

    @Post(`/create`)
    create(@Body() dto: ProductionDto) {
        return this.productionService.create(dto);
    }

    @Get(`/get_all`)
    getAll() {
        return this.productionService.getAll();
    }

    @Get(`/get_by_title/:title`)
    getByTitle(@Param('title') title: string) {
        return this.productionService.getOneByTitle(title);
    }

    @Get(`/get_by_title/:id`)
    getById(@Param('id') id: number) {
        return this.productionService.getOneById(id);
    }
}
