import {ChangeEvent, FormEvent, useState} from 'react';
import '../AccountModal.css';
import {register} from '../../../../api/auth/register';
import {onChange} from "../../../../utils/onChange.ts";

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}


export function RegisterModal({setCurrent}: Props) {


    // позже заменить на фабрику функций

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    function clear() {
        setFirstName("");
        setLastName("");
        setPassword("");
        setLogin("");
        setSecondPassword("");
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();

        setIsLoading(true);

        setTimeout(() => {
            register(login, password, firstName, lastName);
            
            clear();

            setIsLoading(false);
        }, 100);
    }


    return (
        <form className="justify-content-center form-auth" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Логин"
                    value={login}
                    onChange={onChange(setLogin)}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Имя"
                    value={firstName}
                    onChange={onChange(setFirstName)}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Фамилия"
                    value={lastName}
                    onChange={onChange(setLastName)}
                />
                <br/>
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={onChange(setPassword)}
                />
                <br/>
                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    value={secondPassword}
                    onChange={onChange(setSecondPassword)}
                />
                <br/>
                <div>
                    {isLoading ? (
                        <button className="button-auth">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </button>
                    ) : (
                        <button className="button-auth">
                            Регистрация
                        </button>
                    )}
                </div>
                <div>
                    <button className="button-register" onClick={() => setCurrent("auth")}>У меня есть пароль
                    </button>
                </div>
            </div>
        </form>
    )
}