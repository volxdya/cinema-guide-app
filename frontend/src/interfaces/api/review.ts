import {user} from "./user.ts";
import {film} from "./film.ts";

export interface Review {
    readonly text: string;
    readonly filmId: number;
    readonly userId: number;
    readonly rating: number;
    readonly user: user;
    readonly film: film;
}