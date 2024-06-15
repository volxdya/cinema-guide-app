import {makeAutoObservable} from "mobx";
import {film} from "../interfaces/api/film.ts";
import axios from "axios";
import {randomFilm} from "./default-values/films/random-film.ts";
import {oneFilm} from "./default-values/films/one-film.ts";

class Films {
    constructor() {
        makeAutoObservable(this);
    }

    films: film[]  = [];
    genreFilms: film[] = [];
    searchFilms: film[] = [];

    random: film = randomFilm;
    oneFilm: film = oneFilm;
    like = false;

    async getTenFilms() {
        await axios.get(`${import.meta.env.VITE_API_URL}/film/get_limit/10`).then(res => {
            this.films = res.data;
        }).catch((err) => {
            console.log(err);
        });
    }

    async getRandom() {
        await axios.get(`${import.meta.env.VITE_API_URL}/film/get_random`).then(res => {
            this.random = res.data;
        }).catch((err) => {
            console.log(err);
        });
    }

    async getByGenre(genreTitle: string){
        await axios.get(`http://localhost:${import.meta.env.VITE_API_PORT}/genre/get_film_by_genre/${genreTitle}`).then(res => {
            this.genreFilms = res.data;
        }).catch((err) => {
            console.log(err);
        })
    }

    async getByInputValue(inputValue: string) {
        await axios.get(`http://localhost:${import.meta.env.VITE_API_PORT}/film/search/${inputValue}`).then(res => {
            this.searchFilms = res.data;
        }).catch((err) => {
            console.log(err);
        })
    }

    async getOneFilm(filmId: number) {
        await axios.get(`http://localhost:${import.meta.env.VITE_API_PORT}/film/get_one/${filmId}`).then(res => {
            this.oneFilm = res.data;
        }).catch((err) => {
            console.log(err);
        })
    }


}

export default new Films();