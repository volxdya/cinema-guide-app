import {ErrorMessage, Field, Form} from "formik";

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}

export function AuthForm({setCurrent}: Props) {
    return (
        <Form>
            <div className="justify-content-center form-auth">
                <div>

                    <Field name="login" placeholder="Введите логин"/>
                    <div/>
                    <ErrorMessage name="login">
                        {(error) => <div> {error} </div>}
                    </ErrorMessage>
                    <br/>

                    <Field name="password" placeholder="Введите пароль"/>
                    <div/>
                    <ErrorMessage name="password">
                        {(error) => <div> {error} </div>}
                    </ErrorMessage>

                    <div>
                        <button type="submit" className="button-auth">Войти</button>
                    </div>
                    <div>
                        <button type="button" className="button-register"
                                onClick={() => setCurrent("register")}>Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </Form>
    );
}