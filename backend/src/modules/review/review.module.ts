import { Module } from '@nestjs/common';
import {ReviewController} from "./review.controller";
import {ReviewService} from "./review.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Review} from "./review.model";
import {User} from "../user/user.model";
import {Film} from "../film/film.model";

@Module({
    controllers: [ReviewController],
    providers: [ReviewService],
    imports: [SequelizeModule.forFeature([Review, User, Film])],
})
export class ReviewModule {}
