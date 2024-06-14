import {ErrorMessage, Field, Form} from "formik";

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}

export function RegisterForm({setCurrent}: Props) {
    return (
        <Form>
            <div className="justify-content-center form-auth">
                <div>

                    <Field name="login" placeholder="Введите логин"/>
                    <div/>
                    <ErrorMessage name="login">
                        {(error) => <div className="error-input"> {error} </div>}
                    </ErrorMessage>

                    <Field name="password" placeholder="Введите пароль"/>
                    <div/>
                    <ErrorMessage name="password">
                        {(error) => <div className="error-input"> {error} </div>}
                    </ErrorMessage>

                    <Field name="firstName" placeholder="Введите имя"/>
                    <div/>
                    <ErrorMessage name="password">
                        {(error) => <div className="error-input"> {error} </div>}
                    </ErrorMessage>

                    <Field name="lastName" placeholder="Введите фамилию"/>
                    <div/>
                    <ErrorMessage name="password">
                        {(error) => <div className="error-input"> {error} </div>}
                    </ErrorMessage>

                    <Field name="secondPassword" placeholder="Подтвердите пароль"/>
                    <div/>
                    <ErrorMessage name="password">
                        {(error) => <div className="error-input"> {error} </div>}
                    </ErrorMessage>

                    <div>
                        <button type="submit" className="button-auth">Продолжить</button>
                    </div>
                    <div>
                        <button type="button" className="button-register"
                                onClick={() => setCurrent("auth")}>У меня есть пароль
                        </button>
                    </div>
                </div>
            </div>
        </Form>
    );
}