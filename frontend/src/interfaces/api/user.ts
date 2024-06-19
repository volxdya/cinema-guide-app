import {film} from "./film.ts";
import {role} from "./role.ts";
import {production} from "./production.ts";

export interface user {
    id: number;
    login: string;
    firstName: string;
    lastName: string;
    password: string;
    roleTitle: string;
    favorites: film[];
    roles: role[];
    productions: production[];
}