import {makeAutoObservable} from "mobx";
import axios from "axios";
import {genre} from "../interfaces/api/genre.ts";

class Genres {
    constructor() {
        makeAutoObservable(this);
    }

    genres: genre[] = [];
    isGenreError: boolean = false;


    getAllGenres() {
        axios.get(`${import.meta.env.VITE_API_URL}/genre/get_all`).then(res => {
            this.isGenreError = false;

            this.genres = res.data;
        }).catch(err => {
            this.isGenreError = true;

            console.log(err)
        });
    }
}

export default new Genres();
