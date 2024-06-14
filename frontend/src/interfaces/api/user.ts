import {film} from "./film.ts";
import {role} from "./role.ts";

export interface user {
    id: number;
    login: string;
    firstName: string;
    lastName: string;
    password: string;
    roleTitle: string;
    favorites: film[]
    roles: role[]
}