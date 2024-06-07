import {makeAutoObservable} from "mobx";

export interface todo {
    userId: number;
    id: number;
    title: string;
    body: string;
}

class Test {
    testArr: todo[] = []

    constructor() {
        makeAutoObservable(this);
    }

    load() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(json => this.testArr = [...this.testArr, ...json]);
    }
}

export default new Test();