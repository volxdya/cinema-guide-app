import {useNavigate} from "react-router-dom";
import {removeItem} from "../../../utils/localStorage.ts";

export function LogOut() {
    const navigate = useNavigate();

    function logOut() {
        removeItem("token");

        navigate('/');
    }


    return (
        <button className="button-log-out mt-5" onClick={logOut}>
            Выйти из аккаунта
        </button>
    );
}