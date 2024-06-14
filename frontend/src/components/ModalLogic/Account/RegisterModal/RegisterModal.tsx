import '../AccountModal.css';
import {Formik} from "formik";
import {initialState, schemas} from "./helper.ts";
import {RegisterForm} from "./Form.tsx";
import axios from "axios";
import {CSSTransition} from "react-transition-group";
import {ToastsBS} from "../../../../ui/Toast/ToastsBS.tsx";
import {Check} from "../../../../icons/Check.tsx";
import {ErrorIcon} from "../../../../icons/Error.tsx";
import {useState} from "react";
import {IRegister} from "../../../../interfaces/validation/register.ts";

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}

export function RegisterModal({setCurrent}: Props) {
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



    function clear(values: IRegister) {
        values.login = "";
        values.password = "";
        values.firstName = "";
        values.lastName = "";
        values.secondPassword = "";
    }

    const handleSubmit = async (values: IRegister) => {
        if (values.password === values.secondPassword) {
            await axios.post(`${import.meta.env.VITE_API_URL}/user/create`, {
                login: values.login,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
            }).then(res => {
                clear(values);
                console.log(res);

                success();
            }).catch(err => {
                console.log(err);

                error();
            });
        } else {
            console.log("Неверный пароль");
        }
    }


    return (
        <>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialState}
                validationSchema={schemas.custom}
            >
                <RegisterForm setCurrent={setCurrent}/>

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
}