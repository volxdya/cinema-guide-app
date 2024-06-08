import './Modal.css';
import {ChangeEvent, FormEvent, useState} from "react";
import {auth} from "../../api/auth/auth.ts";

export function Modal() {
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

        setPassword("");
        setLogin("");
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel">Cinema</h1>

                    </div>
                    <button type="button" className="btn-close btn-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body">
                        <form className="justify-content-center form-auth" onSubmit={handleSubmit}>
                            <div>
                                <input type="text" placeholder="Электронная почта" value={login} onChange={handleChangeLogin}/>
                                <br/>
                                <input type="text" placeholder="Пароль" value={password} onChange={handleChangePassword} />
                                <div>
                                    <button className="button-auth">Войти</button>
                                </div>
                                <div>
                                    <button className="button-register">Регистрация</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}