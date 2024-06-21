import './Profile.css';
import {observer} from "mobx-react-lite";
import {Navigation} from "./Navigation/Navigation.tsx";
import {getItem} from "../../utils/localStorage.ts";
import Modal from "../../store/modal.ts";

const Profile = observer(() => {

    function goAuth() {
        Modal.setCurrent("auth");
    }

    if (getItem("token")) {
        return (
            <div className="main-container mt-5">
                <h1 className="text-xl-start text-center">Мой аккаунт</h1>
                <Navigation/>
            </div>
        );
    }

    return (
        <div className="main-container mt-5">
            <h1 className="text-center">Пожалуйста,
                <span className="auth-helper px-3" onClick={goAuth} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Войдите в учётную запись
                </span>
            </h1>
        </div>
    )
});

export default Profile;