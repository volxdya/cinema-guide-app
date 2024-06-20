import {Formik} from "formik";
import {ProductionForm} from "./Form.tsx";
import {initialState} from "../../../validation-helpers/prodiction-helper.ts";
import axios from "axios";
import {IProduction} from "../../../interfaces/validation/production.ts";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import users from "../../../store/users.ts";
import uniqid from "uniqid";
import {CSSTransition} from "react-transition-group";
import {ToastsBS} from "../../../ui/Toast/ToastsBS.tsx";
import {Check} from "../../../icons/Check.tsx";
import {ErrorIcon} from "../../../icons/Error.tsx";


export const ProductionModal = observer(() => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);


    // ПОЗЖЕ ЗАМЕНИТЬ НА ФАБРИКУ
    function success() {
        setIsError(false);
        setIsSuccess(true);
    }

    function error() {
        setIsSuccess(false);
        setIsError(true);
    }


    useEffect(() => {
        users.getUserData();
    }, []);

    const handleSubmit = async (values: IProduction) => {
        await axios.post(`${import.meta.env.VITE_API_URL}/production/create`, {
            userId: users.userData.id,
            title: values.title,
            description: values.description,
            image: uniqid()
        }).then(() => {
            success();
            users.getFullUserData(users.userData.login);

            values.title = "";
            values.description = "";
        }).catch((err) => {
            console.log(err);
            error();
        })
    }


    return (
        <>
            <Formik
                initialValues={initialState}
                onSubmit={handleSubmit}>
                <ProductionForm/>
            </Formik>

            <CSSTransition in={isSuccess} timeout={300} unmountOnExit classNames="my-node">
                {isSuccess && (
                    <ToastsBS type="success" children={
                        <div className="d-flex gap-3">
                            <Check/>
                            Успешно!
                        </div>
                    }/>
                )}
            </CSSTransition>

            <CSSTransition in={isError} timeout={300} unmountOnExit classNames="my-node">
                <div className="container-toastszxc">
                    <ToastsBS type="error" children={
                        <div className="d-flex gap-3">
                            <ErrorIcon/>
                            Неизвестная ошибка...
                        </div>
                    }/>
                </div>
            </CSSTransition>
        </>
    )
});