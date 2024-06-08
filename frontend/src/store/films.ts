import {makeAutoObservable} from "mobx";
import {film} from "../interfaces/film.ts";
import axios from "axios";

class Films {
    constructor() {
        makeAutoObservable(this);
    }

    films: film[] = [];
    genreFilms: film[] = []
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
        await axios.get(`http://localhost:4005/genre/get_film_by_genre/${genreTitle}`).then(res => {
            this.genreFilms = res.data;
            console.log(genreTitle);
        }).catch((err) => {
            console.log(err);
        })
    }


}

export default new Films();