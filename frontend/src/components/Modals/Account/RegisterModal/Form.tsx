import {ErrorMessage, Field, Form} from "formik";
import {RegisterInputs} from "./inputs.ts";
import {IInputs} from "../../../../interfaces/validation/inputs.ts";
import uniqid from "uniqid";
import Modal from "../../../../store/modal.ts";


export function RegisterForm() {
    return (
        <Form>
            <div className="form-auth mt-4 mb-2">
                <div className="d-flex justify-content-center">
                    <div>
                        {RegisterInputs.map((item: IInputs) => {
                            return (
                                <div key={uniqid()}>
                                    <Field name={item.name} placeholder={item.placeholder} type={item.type}/>
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
                                    onClick={() => Modal.setCurrent("auth")}>У меня есть пароль
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
}