import {IInputs} from "../../../interfaces/validation/inputs.ts";
import uniqid from "uniqid";
import {ErrorMessage, Field, Form} from "formik";
import {ProductionInputs} from "./inputs.ts";

export function ProductionForm() {
    return (
        <Form>
            <div className="form-auth mt-4 mb-2">
                <div className="d-flex justify-content-center">
                    <div>
                        {ProductionInputs.map((item: IInputs) => {
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
                    </div>
                </div>
            </div>
        </Form>
    );
}