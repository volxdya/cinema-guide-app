import {makeAutoObservable} from "mobx";
import {film} from "../interfaces/film.ts";
import axios from "axios";

class Films {
    constructor() {
        makeAutoObservable(this);
    }

    films: film[] = [];
    genreFilms: film[] = [];
    searchFilms: film[] = [];

    random: film = {
        id: 0,
        description: "",
        time: 0,
        title: "",
        budget: 0,
        revenue: 0,
        genreTitle: "",
        productionId: 0,
        rating: 0,
        year: 0,
        image: "",
        genres: [],
        productions: []
    };
    oneFilm: film = {
        budget: 0,
        genreTitle: "",
        genres: [],
        image: "",
        productionId: 0,
        productions: [],
        rating: 0,
        revenue: 0,
        time: 0,
        title: "",
        year: 0,
        id: 0,
        description: ""

    }
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