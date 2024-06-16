import {Link, useLocation} from "react-router-dom";
import users from "../../../store/users.ts";
import {Person} from "../../../icons/Person.tsx";
import {getItem} from "../../../utils/localStorage.ts";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import Modal from "../../../store/modal.ts";

export const ProfileHeader = observer(() => {
    const url = useLocation();
    const token = getItem("token");

    useEffect(() => {
        users.getUserData();

        users.getFullUserData(users.userData.login);
    }, [token]);

    return (
        <>
            <div className="d-flex align-items-center pt-3 px-3 d-xl-block d-none">
                {!token || token === "" || token === undefined || token === null ? (
                    <button type="button" className="link" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            onClick={() => Modal.setCurrent("auth")}
                    >
                        Войти
                    </button>
                ) : (
                    <Link to="/profile"
                          className={url.pathname === "/profile" ? 'active link' : 'link'}>
                        {users.fullUserData.firstName}
                    </Link>
                )}
            </div>

            <div className="d-xl-none d-block">
                {!token || token === "" || token === undefined || token === null ? (
                    <button type="button" className="link" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                        <Person/>
                    </button>
                ) : (
                    <Link to="/profile"
                          className={url.pathname === "/profile" ? 'active link' : 'link'}>
                        <Person/>
                    </Link>
                )}
            </div>
        </>
    )
});