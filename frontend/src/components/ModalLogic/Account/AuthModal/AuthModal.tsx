import {FormEvent, useState} from "react";
import {auth} from "../../../../api/auth/auth";
import '../AccountModal.css';
import {onChange} from "../../../../utils/onChange.ts";

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}

export function AuthModal({setCurrent}: Props) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();

        await auth(login, password);


        window.location.reload();

        setPassword("");
        setLogin("");
    }

    return (
        <form className="justify-content-center form-auth" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Электронная почта"
                    value={login}
                    required
                    onChange={onChange(setLogin)}
                />
                {/*{isLoginErr && (*/}
                {/*    <div id="validationServerUsernameFeedback" className="invalid-feedback">*/}
                {/*        Введите имя пользователя*/}
                {/*    </div>*/}
                {/*)}*/}
                {/*{!isLoginErr && !isPasswordErr && (*/}
                {/*    <br/>*/}
                {/*)}*/}
                <br/>
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={onChange(setPassword)}
                    required
                />
                {/*{isPasswordErr && (*/}
                {/*    <div id="validationServerUsernameFeedback" className="invalid-feedback">*/}
                {/*        Введите пароль*/}
                {/*    </div>*/}
                {/*)}*/}
                <div>
                    <button className="button-auth">Войти</button>
                </div>
                <div>
                    <button className="button-register" onClick={() => setCurrent("register")}>Регистрация</button>
                </div>
            </div>
        </form>
    );
}