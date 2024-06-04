import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ProductionService} from "./production.service";
import {ProductionDto} from "./dto/ProductionDto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Production')
@Controller('/production/')
export class ProductionController {
    constructor(private readonly productionService: ProductionService) {
    }

    @ApiOperation({
        summary: "Создание продакшена"
    })

    @ApiResponse({
        status: 200,
        type: ProductionDto
    })
    @Post(`/create`)
    create(@Body() dto: ProductionDto) {
        return this.productionService.create(dto);
    }

    @ApiOperation({
        summary: "Получение массива всех продакшенов"
    })

    @ApiResponse({
        status: 200,
        type: [ProductionDto]
    })
    @Get(`/get_all`)
    getAll() {
        return this.productionService.getAll();
    }

    @ApiOperation({
        summary: "Получение одного продакшена по названию"
    })

    @ApiResponse({
        status: 200,
        type: ProductionDto
    })

    @Get(`/get_by_title/:title`)
    getByTitle(@Param('title') title: string) {
        return this.productionService.getOneByTitle(title);
    }

    @ApiOperation({
        summary: "Получение одного продакшена по id"
    })

    @ApiResponse({
        status: 200,
        type: ProductionDto
    })
    @Get(`/get_by_title/:id`)
    getById(@Param('id') id: number) {
        return this.productionService.getOneById(id);
    }
}
