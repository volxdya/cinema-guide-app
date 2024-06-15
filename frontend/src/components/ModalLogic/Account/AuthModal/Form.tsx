import {ErrorMessage, Field, Form} from "formik";
import {AuthInputs} from "./inputs.ts";
import {IInputs} from "../../../../interfaces/validation/inputs.ts";

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}

export function AuthForm({setCurrent}: Props) {
    return (
        <Form>
            <div className="justify-content-center form-auth">
                <div>

                    {AuthInputs.map((item: IInputs) => {
                        return (
                            <>
                                <Field name={item.name} placeholder={item.placeholder}/>
                                <div/>
                                <ErrorMessage name={item.name}>
                                    {(error) => <div className="error-input"> {error} </div>}
                                </ErrorMessage>
                            </>
                        );
                    })}

                    <br/>

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