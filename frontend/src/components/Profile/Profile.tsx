import './Profile.css';
import {observer} from "mobx-react-lite";
import {Navigation} from "./Navigation/Navigation.tsx";
import {UserData} from "./UserData/UserData.tsx";
import {LogOut} from "./LogOut/LogOut.tsx";
import {useState} from "react";
import {Favorites} from "./Favorites/Favorites.tsx";
import {EditProfile} from "./Edit/EditProfile.tsx";
import {getItem} from "../../utils/localStorage.ts";

export const Profile = observer(() => {

    const [current, setCurrent] = useState("favorites");

    if (getItem("token")) {
        return (
            <div className="main-container mt-5">
                <h1 className="text-xl-start text-center">Мой аккаунт</h1>
                <Navigation setCurrent={setCurrent} current={current}/>

                {current === "settings" && (
                    <>
                        <UserData/>
                        <div className="d-xl-block text-xl-start text-center">
                            <EditProfile/>
                            <LogOut/>
                        </div>
                    </>
                )}

                {current === "favorites" && (
                    <Favorites/>
                )}
            </div>
        );
    }

    return (
        <div>Токена нет</div>
    )
});