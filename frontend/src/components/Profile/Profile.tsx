import './Profile.css';
import {observer} from "mobx-react-lite";
import {Navigation} from "./Navigation/Navigation.tsx";
import {useState} from "react";
import {getItem} from "../../utils/localStorage.ts";

export const Profile = observer(() => {

    const [current, setCurrent] = useState("favorites");

    if (getItem("token")) {
        return (
            <div className="main-container mt-5">
                <h1 className="text-xl-start text-center">Мой аккаунт</h1>
                <Navigation setCurrent={setCurrent} current={current}/>
            </div>
        );
    }

    return (
        <div>Токена нет</div>
    )
});