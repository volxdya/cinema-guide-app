import {makeAutoObservable} from "mobx";
import axios from "axios";

class Reviews {
    constructor(){
        makeAutoObservable(this);
    }

    reviews = [];

    async getReviews(filmId: number, offset: number) {
        axios.get(`${import.meta.env.VITE_API_URL}/review/get_by_filmId/${filmId}/${offset}`).then(res => {
            if (offset >= 1) {
                this.reviews = this.reviews.concat(...res.data);
            } else {
                this.reviews = res.data;
            }
        }).catch((err) => {
            console.log(err);
        });
    }
}

export default new Reviews();