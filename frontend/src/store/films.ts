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
}

export default new Films();