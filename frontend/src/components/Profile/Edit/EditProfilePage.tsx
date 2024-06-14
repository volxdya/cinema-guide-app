import './EditProfilePage.css';
import {FormEvent, useEffect, useState} from "react";
import users from "../../../store/users.ts";
import {observer} from "mobx-react-lite";
import axios from "axios";
import {Alert} from "../../../ui/Alert/Alert.tsx";
import {CSSTransition} from 'react-transition-group';
import {getItem} from "../../../utils/localStorage.ts";
import {onChange} from "../../../utils/onChange.ts";


export const EditProfilePage = observer(() => {

    const [firstName, setFirstName] = useState(users.fullUserData.firstName);
    const [lastName, setLastName] = useState(users.fullUserData.lastName);
    const [password, setPassword] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        users.getUserData();

        users.getFullUserData(users.userData.login);
    }, []);

    useEffect(() => {
        setFirstName(users.fullUserData.firstName);
        setLastName(users.fullUserData.lastName);
    }, []);

    function success() {
        setIsSuccess(true);

        setTimeout(() => {
            setIsSuccess(false);
        }, 5000)
    }

    const handleSubmit = (event: FormEvent) => {
        event.stopPropagation();
        event.preventDefault();

        axios.put(`http://localhost:${import.meta.env.VITE_API_PORT}/user/update/${users.fullUserData.login}`, {
            firstName: firstName,
            lastName: lastName,
            password: password
        }, {
            headers: {
                Authorization: `Bearer ${getItem("token")}`
            }
        }).then(() => {
            success();
        });
    }

    return (
        <div className="main-container mt-5 mb-5">
            <div className="edit-profile-page">
                <div className="edit-profile-page-container">
                    <div className="d-flex gap-3 d-flex align-items-center">
                        <p className="profile-avatar">
                            {users.fullUserData.firstName.charAt(0).toUpperCase()}
                            {users.fullUserData.lastName.charAt(0).toUpperCase()}
                        </p>
                        <p>{users.fullUserData.firstName} {users.fullUserData.lastName}</p>
                    </div>
                    <div className="d-flex gap-3 d-flex align-items-center">
                        <p className="profile-avatar">
                            ID
                        </p>
                        <p>{users.fullUserData.id}</p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="d-flex justify-content-center gap-4 flex-wrap mt-4">
                        <label>
                            <div className="label-edit-input">
                                Имя
                            </div>
                            <input
                                type="text"
                                className="edit-input"
                                value={firstName}
                                onChange={onChange(setFirstName)}
                            />
                        </label>
                        <label>
                            <div className="label-edit-input">
                                Фамилия
                            </div>
                            <input
                                type="text"
                                className="edit-input"
                                value={lastName}
                                onChange={onChange(setLastName)}
                            />
                        </label>
                        <label>
                            <div className="label-edit-input">
                                Логин
                            </div>
                            <input
                                type="text"
                                className="edit-input"
                                value={users.fullUserData.login}
                            />
                        </label>
                        <label>
                            <div className="label-edit-input">
                                Пароль
                            </div>
                            <input
                                type="password"
                                className="edit-input"
                                value={password}
                                onChange={onChange(setPassword)}
                            />
                        </label>
                        <button className="button-edit button-edit-page mb-5">Изменить</button>
                    </form>

                    <CSSTransition in={isSuccess} timeout={300} unmountOnExit classNames="my-node">
                        <div className="d-flex justify-content-center">
                            <div className="alert-message">
                                <Alert message={"Успешно!"} type={"success"}/>
                            </div>
                        </div>
                    </CSSTransition>


                </div>
            </div>
        </div>
    )
});