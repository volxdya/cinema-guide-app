import {Body, Controller, Get, Post} from '@nestjs/common';
import {ReviewService} from "./review.service";
import {ReviewDto} from "./dto/ReviewDto";

@Controller('/review/')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}

    @Get(`/get_all`)
    getAll() {
        return this.reviewService.getAll();
    }

    @Post(`/create`)
    create(@Body() dto: ReviewDto) {
        return this.reviewService.create(dto);
    }

}
