import {IInputs} from "../../../../interfaces/validation/inputs.ts";

export const AuthInputs: IInputs[] =
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
    ];