import './Profile.css';
import {observer} from "mobx-react-lite";
import {Navigation} from "./Navigation/Navigation.tsx";
import {UserData} from "./UserData/UserData.tsx";
import {LogOut} from "./LogOut/LogOut.tsx";
import {useState} from "react";

export const Profile = observer(() => {

    const [current, setCurrent] = useState("favorites");

    return (
        <div className="main-container mt-5">
            <h1>Мой аккаунт</h1>
            <Navigation setCurrent={setCurrent} current={current}/>

            {current === "settings" && (
                <UserData/>
            )}

            {current === "favorites" && (
                <div>test</div>
            )}
            <LogOut/>
        </div>
    );
});