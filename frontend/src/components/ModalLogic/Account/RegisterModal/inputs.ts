import {IInputs} from "../../../../interfaces/validation/inputs.ts";

export const RegisterInputs: IInputs[] =
    [
        {
            placeholder: "Введите логин",
            name: "login"
        },
        {
            placeholder: "Введите пароль",
            name: "password"
        },
        {
            placeholder: "Введите имя",
            name: "firstName",
        },
        {
            placeholder: "Введите фамилию",
            name: "lastName",
        },
        {
            placeholder: "Подтвердите пароль",
            name: "secondPassword"
        }
    ];