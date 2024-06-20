import {makeAutoObservable} from "mobx";
import {production} from "../interfaces/api/production.ts";
import axios from "axios";

class Productions {
    constructor() {
        makeAutoObservable(this);
    }

    prods: production[] = [];

    async getUserProductions(login: string) {
        axios.get(`${import.meta.env.VITE_API_URL}/user/get_productions/${login}`).then(res => {
           this.prods = res.data;

        }).catch(err => {
            console.log(err);
        });
    }
}

export default new Productions();