import {ErrorMessage, Field, Form} from "formik";

export function EditForm() {
    return (
        <Form>
            <div
                className="d-flex justify-content-center gap-4 flex-wrap mt-4">
                <label>
                    <div className="label-edit-input">
                        Имя
                    </div>
                    <Field
                        type="text"
                        className="edit-input"
                        name="firstName"
                    />
                    <ErrorMessage name="firstName">
                        {(error) => <div className="error-input"> {error} </div>}
                    </ErrorMessage>
                </label>

                <label>
                    <div className="label-edit-input">
                        Фамилия
                    </div>
                    <Field
                        type="text"
                        className="edit-input"
                        name="lastName"
                    />
                    <ErrorMessage name="lastName">
                        {(error) => <div className="error-input"> {error} </div>}
                    </ErrorMessage>
                </label>

                <label>
                    <div className="label-edit-input">
                        Пароль
                    </div>
                    <Field
                        type="password"
                        className="edit-input"
                        name="password"
                    />
                    <ErrorMessage name="password">
                        {(error) => <div className="error-input"> {error} </div>}
                    </ErrorMessage>
                </label>
                <label>
                    <div className="label-edit-input">
                        Подтвердите пароль
                    </div>
                    <Field
                        type="password"
                        className="edit-input"
                        name="secondPassword"
                    />
                    <ErrorMessage name="secondPassword">
                        {(error) => <div className="error-input"> {error} </div>}
                    </ErrorMessage>
                </label>

                <button type="submit" className="button-edit button-edit-page mb-5">Изменить</button>
            </div>
        </Form>
    );
}