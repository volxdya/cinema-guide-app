import {useState, ChangeEvent, FormEvent} from "react";
import {auth} from "../../../../api/auth/auth";
import '../AccountModal.css';
import {log} from "node:util";

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}

export function AuthModal({setCurrent}: Props) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginErr, setIsLoginError] = useState(false);
    const [isPasswordErr, setIsPasswordErr] = useState(false);

    const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }


    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (login.length <= 4) {
            setIsLoginError(true);
        }

        if (password.length <= 4) {
            setIsLoginError(true);
        }

        else {
            await auth(login, password);


            try {
                window.location.reload();

            } catch (err) {
                console.log(err);
            }
        }

        console.log('login -> ', isLoginErr)
        console.log('pass -> ', isPasswordErr)

        setPassword("");
        setLogin("");
    }

    return (
        <form className="justify-content-center form-auth" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    className={isLoginErr ? "is-invalid" : ""}
                    placeholder="Электронная почта"
                    value={login}
                    required
                    onChange={handleChangeLogin}
                />
                {isLoginErr && (
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        Введите имя пользователя
                    </div>
                )}
                {!isLoginErr && !isPasswordErr && (
                    <br/>
                )}
                <input
                    type="password"
                    placeholder="Пароль"
                    className={isPasswordErr ? "is-invalid" : ""}
                    value={password}
                    onChange={handleChangePassword}
                    required
                />
                {isPasswordErr && (
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                        Введите пароль
                    </div>
                )}
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