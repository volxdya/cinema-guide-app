import {film} from "./film.ts";

export interface user {
    id: number;
    login: string;
    firstName: string;
    lastName: string;
    password: string;
    roleTitle: string;
    favorites: film[]
}