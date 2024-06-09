import { useState, ChangeEvent, FormEvent } from "react";
import { auth } from "../../../../api/auth/auth";
import '../AccountModal.css';

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}

export function AuthModal({setCurrent}: Props) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    }

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }


    const handleSubmit = async(event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();

        await auth(login, password);

        try {
            window.location.reload();
        } catch (err) {
            console.log(err);
        }

        setPassword("");
        setLogin("");
    }
    
    return (
        <form className="justify-content-center form-auth" onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Электронная почта" value={login} onChange={handleChangeLogin} />
                <br />
                <input type="text" placeholder="Пароль" value={password} onChange={handleChangePassword} />
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