import {IInputs} from "../../../interfaces/validation/inputs.ts";

export const EditInputs: IInputs[] =
    [
        {
            placeholder: "Введите имя",
            name: "firstName",
            label: "Имя"
        },
        {
            placeholder: "Введите фамилию",
            name: "lastName",
            label: "Фамилия"
        },
        {
            placeholder: "Введите пароль",
            name: "password",
            label: "Пароль"
        },
        {
            placeholder: "Подтвердите пароль",
            name: "secondPassword",
            label: "Пароль"
        }
    ];