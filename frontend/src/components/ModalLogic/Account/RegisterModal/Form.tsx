import {ErrorMessage, Field, Form} from "formik";
import {RegisterInputs} from "./inputs.ts";
import {IInputs} from "../../../../interfaces/validation/inputs.ts";
import uniqid from "uniqid";

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}

export function RegisterForm({setCurrent}: Props) {
    return (
        <Form>
            <div className="justify-content-center form-auth">
                <div>

                    {RegisterInputs.map((item: IInputs) => {
                        return (
                            <div key={uniqid()}>
                                <Field name={item.name} placeholder={item.placeholder}/>
                                <div/>
                                <ErrorMessage name={item.name}>
                                    {(error) => <div className="error-input"> {error} </div>}
                                </ErrorMessage>
                            </div>
                        )
                    })}

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