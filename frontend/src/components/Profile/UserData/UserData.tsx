import {observer} from "mobx-react-lite";
import users from "../../../store/users.ts";
import {useEffect} from "react";

export const UserData = observer(() => {
    useEffect(() => {
        users.getUserData();
    }, []);

    return (
        <>
            <section className="d-flex gap-3">
                <div>
                    <p className="profile-avatar">
                        {users.userData.firstName.charAt(0).toUpperCase()}
                        {users.userData.lastName.charAt(0).toUpperCase()}
                    </p>
                </div>
                <div className="profile-info">
                    <p className="m-0">Имя фамилия</p>
                    <p className="m-0 user-data">
                        {users.userData.firstName + " "}
                        {users.userData.lastName}
                    </p>
                </div>
            </section>

            <section className="d-flex gap-3 mt-3">
                <div>
                    <p className="profile-avatar">{users.userData.login.charAt(0).toUpperCase()}</p>
                </div>
                <div className="profile-info">
                    <p className="m-0">Логин</p>
                    <p className="m-0 user-data">{users.userData.login}</p>
                </div>
            </section>
        </>
    );
});