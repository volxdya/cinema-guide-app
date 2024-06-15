import {ErrorMessage, Field, Form} from "formik";
import {EditInputs} from "./inputs.ts";
import {IInputs} from "../../../interfaces/validation/inputs.ts";
import uniqid from "uniqid";

export function EditForm() {
    return (
        <Form>
            <div
                className="d-flex justify-content-center gap-4 flex-wrap mt-4">

                {EditInputs.map((item: IInputs) => {
                    return (
                        <label key={uniqid()}>
                            <div className="label-edit-input">
                                {item.label}
                            </div>
                            <Field
                                type="text"
                                className="edit-input"
                                name={item.name}
                            />
                            <ErrorMessage name={item.name}>
                                {(error) => <div className="error-input"> {error} </div>}
                            </ErrorMessage>
                        </label>
                    );
                })}


                <button type="submit" className="button-edit button-edit-page mb-5">Изменить</button>
            </div>
        </Form>
    );
}