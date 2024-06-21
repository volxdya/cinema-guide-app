import {ErrorMessage, Field, Form, Formik} from "formik";
import {IInputs} from "../../../interfaces/validation/inputs.ts";
import uniqid from "uniqid";
import {ratings} from "../../../utils/filmArray.ts";
import {ReviewInputs} from "./inputs.ts";
import {initialState} from "../../../validation-helpers/review-helper.ts";
import {IReview} from "../../../interfaces/validation/review.ts";
import axios from "axios";
import {useEffect, useState} from "react";
import users from "../../../store/users.ts";
import {onChange} from "../../../utils/onChange.ts";
import reviews from "../../../store/reviews.ts";

export function ReviewForm({filmId}: {filmId: number}) {

    const [valueRating, setValueRating] = useState("");


    useEffect(() => {
        users.getUserData();
    }, []);

    const handleSumbit = (values: IReview) => {
        axios.post(`${import.meta.env.VITE_API_URL}/review/create`, {
            text: values.review,
            filmId: filmId,
            userId: users.userData.id,
            rating: valueRating
        }).then(() => {
            reviews.getReviews(filmId);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <Formik initialValues={initialState} onSubmit={handleSumbit}>
            <Form>
                <div className="form-auth mt-4 mb-2">
                    <div className="d-flex">
                        <div>
                            {ReviewInputs.map((item: IInputs) => {
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
                            <select
                                className="form-select my-2 mt-4"
                                aria-label="Default select example"
                                value={valueRating}
                                onChange={onChange(setValueRating)}
                            >
                                <option selected>Выберите оценку</option>
                                {ratings.map((item: number) => {
                                    return (
                                        <option value={item}>{item}</option>
                                    );
                                })}
                            </select>
                            <br/>

                            <div>
                                <button type="submit" className="button-auth">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}