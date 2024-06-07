import {makeAutoObservable} from "mobx";
import {film} from "../interfaces/film.ts";
import axios from "axios";

const API_URL = 'http://localhost:4004/film/get_random';

class RandomFilm {
    random: film = {
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

    constructor() {
        makeAutoObservable(this);
    }

    getRandom() {
        axios.get(API_URL).then(res => {
            this.random = res.data;
            console.log(res.data);
        });
    }

}

export default new RandomFilm();