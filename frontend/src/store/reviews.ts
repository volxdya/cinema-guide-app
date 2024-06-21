import {makeAutoObservable} from "mobx";
import axios from "axios";

class Reviews {
    constructor(){
        makeAutoObservable(this);
    }

    reviews = [];

    async getReviews(filmId: number) {
        axios.get(`${import.meta.env.VITE_API_URL}/review/get_by_filmId/${filmId}`).then(res => {
            this.reviews = res.data;
        }).catch((err) => {
            console.log(err);
        });
    }
}

export default new Reviews();