import {ErrorMessage, Field, Form} from "formik";
import {AuthInputs} from "./inputs.ts";
import {IInputs} from "../../../../interfaces/validation/inputs.ts";
import uniqid from "uniqid";
import Modal from "../../../../store/modal.ts";


export function AuthForm() {
    return (
        <Form>
            <div className="form-auth mt-4 mb-2">
                <div className="d-flex justify-content-center">
                    <div>

                        {AuthInputs.map((item: IInputs) => {
                            return (
                                <div key={uniqid()}>
                                    <Field name={item.name} placeholder={item.placeholder} type={item.type}/>
                                    <div/>
                                    <ErrorMessage name={item.name}>
                                        {(error) => <div className="error-input"> {error} </div>}
                                    </ErrorMessage>
                                </div>
                            );
                        })}

                        <br/>

                        <div>
                            <button type="submit" className="button-auth">Войти</button>
                        </div>
                        <div>
                            <button type="button" className="button-register"
                                    onClick={() => Modal.setCurrent("register")}>Регистрация
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
}