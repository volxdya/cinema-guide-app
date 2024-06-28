import {genre} from "./genre.ts";
import {production} from "./production.ts";
import {Review} from "./review.ts";

export interface film {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly rating: number;
    readonly year: number;
    readonly time: number;
    readonly image: string;
    readonly budget: number;
    readonly revenue: number;
    readonly genreTitle: string;
    readonly productionId: number;
    readonly genres: genre[];
    readonly productions: production[];
    readonly reviews: Review[]
}