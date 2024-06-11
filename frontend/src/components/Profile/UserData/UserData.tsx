import {observer} from "mobx-react-lite";
import users from "../../../store/users.ts";
import {useEffect} from "react";
import {role} from "../../../interfaces/role.ts";

export const UserData = observer(() => {
    useEffect(() => {
        users.getUserData();

        users.getFullUserData(users.userData.login);
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

            <section  className="d-flex gap-3 mt-3">
                <div className="profile-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         className="bi bi-person" viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                </div>

                <div>
                    <p className="m-0">Роли</p>
                    {users.fullUserData.roles.map((item: role) => {
                        return (
                            <p className="user-data">{item.title}</p>
                        );
                    })}
                </div>
            </section>
        </>
    );
});