import {IInputs} from "../../../interfaces/validation/inputs.ts";

export const FilmInputs: IInputs[] = [
    {
        placeholder: "Введите название",
        name: "title",
        type: "text"
    },
    {
        placeholder: "Введите описание",
        name: "description",
        type: "text"
    },
    {
        placeholder: "Введите длительность",
        name: "time",
        type: "number",
        min: 10,
        max: 48 * 60
    },
    {
        placeholder: "Введите бюджет",
        name: "budget",
        type: "number",
        min: 5000,
        max: 1000000000
    }
    ,
    {
        placeholder: "Введите выручку",
        name: "revenue",
        type: "number",
        min: 5000,
        max: 1000000000
    }
];