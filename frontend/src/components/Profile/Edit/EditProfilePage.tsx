import './EditProfilePage.css';
import {useEffect, useState} from "react";
import users from "../../../store/users.ts";
import {observer} from "mobx-react-lite";
import axios from "axios";
import {CSSTransition} from 'react-transition-group';
import {getItem} from "../../../utils/localStorage.ts";
import {IEdit} from "../../../interfaces/validation/edit.ts";
import {Formik} from "formik";
import {initialState, schemas} from "../../../validation-helpers/edit-helper.ts";
import {EditForm} from "./Form.tsx";
import {ToastsBS} from "../../../ui/Toast/ToastsBS.tsx";
import {Check} from "../../../icons/Check.tsx";
import {ErrorIcon} from "../../../icons/Error.tsx";
import {getFirstSymbol} from "../../../utils/getFirstSymbol.ts";


export const EditProfilePage = observer(() => {

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        users.getUserData();

        users.getFullUserData(users.userData.login);
    }, []);

    function error() {
        setIsSuccess(false);
        setIsError(true);
    }

    function success() {
        setIsError(false);
        setIsSuccess(true);
    }

    const handleSubmit = async (values: IEdit) => {

        if (values.password === values.secondPassword) {
            await axios.put(`http://localhost:${import.meta.env.VITE_API_PORT}/user/update/${users.fullUserData.login}`, {
                firstName: values.firstName,
                lastName: values.lastName,
                password: values.password,
            }, {
                headers: {
                    Authorization: `Bearer ${getItem("token")}`
                }
            }).then(() => {
                success();
            }).catch(() => {
                error();
            });
        } else {
            console.log("soon...");
        }
    }

    return (
        <div className="main-container mt-5 mb-5">
            <div className="edit-profile-page">
                <div className="edit-profile-page-container">
                    <div className="d-flex gap-3 d-flex align-items-center">
                        <p className="profile-avatar">
                            {getFirstSymbol(users.fullUserData.firstName)}
                            {getFirstSymbol(users.fullUserData.lastName)}
                        </p>
                        <p>{users.fullUserData.firstName} {users.fullUserData.lastName}</p>
                    </div>
                    <div className="d-flex gap-3 d-flex align-items-center">
                        <p className="profile-avatar">
                            ID
                        </p>
                        <p>{users.fullUserData.id}</p>
                    </div>

                    <Formik initialValues={initialState}
                            validationSchema={schemas.custom}
                            onSubmit={handleSubmit}
                    >
                        <EditForm/>
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

                </div>
            </div>
        </div>
    )
});