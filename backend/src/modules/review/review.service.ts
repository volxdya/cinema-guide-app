import {Inject, Injectable} from '@nestjs/common';
import {ReviewDto} from "./dto/ReviewDto";
import {InjectModel} from "@nestjs/sequelize";
import {Review} from "./review.model";

@Injectable()
export class ReviewService {
    constructor(@InjectModel(Review) private readonly reviewService: typeof Review) {}

    async create(dto: ReviewDto) {
        const review = await this.reviewService.create(dto);

        return review;
    }

    async getAll() {
        const reviews = await this.reviewService.findAll();

        return reviews;
    }
}
