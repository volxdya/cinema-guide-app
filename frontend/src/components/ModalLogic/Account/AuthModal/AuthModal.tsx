import '../AccountModal.css';
import {AuthForm} from "./Form.tsx";
import axios from "axios";
import {setItem} from "../../../../utils/localStorage.ts";
import {Check} from "../../../../icons/Check.tsx";
import {ToastsBS} from "../../../../ui/Toast/ToastsBS.tsx";
import {useState} from "react";
import {ErrorIcon} from "../../../../icons/Error.tsx";
import {CSSTransition} from 'react-transition-group';
import {initialState, schemas} from "../../../../validation-helpers/auth-helper.ts";
import {Formik} from "formik";
import {IAuth} from "../../../../interfaces/validation/auth.ts";

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}

export function AuthModal({setCurrent}: Props) {
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

    const handleSubmit = async (values: IAuth) => {
        await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
            login: values.login,
            password: values.password,
        }).then(res => {
            setItem("token", res.data.token);

            values.login = "";
            values.password = "";

            success();

            setTimeout(() => {
                window.location.reload();
            }, 2500);

        }).catch(err => {
            error();
            console.log(err);
        });

    }

    return (
        <>
            <Formik initialValues={initialState}
                    onSubmit={values => {
                        handleSubmit(values);
                    }}
                    validationSchema={schemas.custom}
            >
            <AuthForm setCurrent={setCurrent}/>
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
                            Неверный логин или пароль
                        </div>
                    }/>
                </div>
            </CSSTransition>


        </>
    );
}