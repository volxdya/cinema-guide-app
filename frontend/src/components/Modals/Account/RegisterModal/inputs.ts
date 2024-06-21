import {IInputs} from "../../../../interfaces/validation/inputs.ts";

export const RegisterInputs: IInputs[] =
    [
        {
            placeholder: "Введите логин",
            name: "login",
            type: "text"
        },
        {
            placeholder: "Введите пароль",
            name: "password",
            type: "password"
        },
        {
            placeholder: "Введите имя",
            name: "firstName",
            type: "text"
        },
        {
            placeholder: "Введите фамилию",
            name: "lastName",
            type: "text"
        },
        {
            placeholder: "Подтвердите пароль",
            name: "secondPassword",
            type: "password"
        }
    ];