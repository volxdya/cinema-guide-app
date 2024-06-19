import {ErrorMessage, Field, Form, Formik} from "formik";
import {initialState} from "../../../validation-helpers/film-helper.ts";
import {FilmInputs} from "./inputs.ts";
import {IInputs} from "../../../interfaces/validation/inputs.ts";
import uniqid from "uniqid";
import {genres, ratings, years} from "../../../utils/filmArray.ts";
import {useState} from "react";
import {onChange} from "../../../utils/onChange.ts";
import axios from "axios";
import {IFilm} from "../../../interfaces/validation/film.ts";
import {useParams} from "react-router-dom";

export function FilmModal() {

    const [yearValue, setYearValue] = useState("");
    const [ratingValue, setRatingValue] = useState("");
    const [genreValue, setGenreValue] = useState("");

    const {id} = useParams();


    let prodId = 0;

    if (id){
        prodId = id;
    }

    const handleSubmit = (values: IFilm) => {
        axios.post(`${import.meta.env.VITE_API_URL}/film/create`, {
            title: values.title,
            year: yearValue,
            description: values.description,
            revenue: values.revenue,
            rating: ratingValue,
            genreTitle: genreValue,
            budget: values.budget,
            time: values.time,
            image: "efwqwqq",
            productionId: prodId
        }).then((resp) => {
            console.log(resp)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <Formik
            initialValues={initialState}
            onSubmit={handleSubmit}>
            <Form>
                <div className="form-auth mt-4 mb-2">
                    <div className="d-flex justify-content-center">
                        <div>
                            {FilmInputs.map((item: IInputs) => {
                                return (
                                    <div key={uniqid()}>
                                        <Field name={item.name} placeholder={item.placeholder} type={item.type}
                                               max={item.max} min={item.min}/>
                                        <div/>
                                        <ErrorMessage name={item.name}>
                                            {(error) => <div className="error-input"> {error} </div>}
                                        </ErrorMessage>
                                    </div>

                                )
                            })}

                            {/*{FilmFields.map((item: IFilmFields) => {*/}
                            {/*    return (*/}
                            {/*        <select className="form-select my-3" aria-label="Default select example">*/}
                            {/*            <option selected>{item.placeholder}</option>*/}
                            {/*            {item.field.map((item: number) => {*/}
                            {/*                return (*/}
                            {/*                    <option value={item}>{item}</option>*/}
                            {/*                );*/}
                            {/*            })}*/}
                            {/*        </select>*/}
                            {/*    )*/}
                            {/*})}*/}

                            <select
                                className="form-select my-2 mt-4"
                                aria-label="Default select example"
                                value={yearValue}
                                onChange={onChange(setYearValue)}
                            >
                                <option selected>Выберите год</option>
                                {years.map((item: number) => {
                                    return (
                                        <option value={item}>{item}</option>
                                    );
                                })}
                            </select>

                            <select
                                className="form-select"
                                aria-label="Default select example"
                                value={ratingValue}
                                onChange={onChange(setRatingValue)}
                            >
                                <option selected>Выберите рейтинг</option>
                                {ratings.map((item: number) => {
                                    return (
                                        <option value={item}>{item}</option>
                                    );
                                })}
                            </select>
                            <select
                                className="form-select mb-4 mt-2"
                                aria-label="Default select example"
                                value={genreValue}
                                onChange={onChange(setGenreValue)}
                            >
                                <option selected>Выберите жанр</option>
                                {genres.map((item: string) => {
                                    return (
                                        <option value={item}>{item}</option>
                                    );
                                })}
                            </select>

                            <label className="input-file mt-3">
                                <input type="file" name="file"/>
                                <span>Выберите автарку</span>
                            </label>

                            <div>
                                <button type="submit" className="button-auth">Продолжить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}