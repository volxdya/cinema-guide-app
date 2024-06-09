import './Profile.css';
import {observer} from "mobx-react-lite";
import {Navigation} from "./Navigation/Navigation.tsx";
import {UserData} from "./UserData/UserData.tsx";
import {LogOut} from "./LogOut/LogOut.tsx";

export const Profile = observer(() => {

    return (
        <div className="main-container mt-5">
            <h1>Мой аккаунт</h1>

            <Navigation/>
            <UserData/>
            <LogOut/>
        </div>
    );
});