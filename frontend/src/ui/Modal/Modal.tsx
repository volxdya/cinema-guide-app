import './Modal.css';

export function Modal() {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel">Cinema</h1>

                    </div>
                    <button type="button" className="btn-close btn-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body">
                        <form className="justify-content-center form-auth">
                            <div>
                                <input type="text" placeholder="Электронная почта"/>
                                <br/>
                                <input type="text" placeholder="Пароль"/>
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