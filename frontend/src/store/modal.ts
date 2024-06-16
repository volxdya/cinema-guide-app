import {makeAutoObservable} from "mobx";

class ModalLogic {
    constructor() {
        makeAutoObservable(this);
    }

    current: string = "";

    setCurrent(key: string){
        this.current = key;
    }
}

export default new ModalLogic();