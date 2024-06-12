import {Link} from "react-router-dom";

export function EditProfile() {
    return (
        <div>
            <Link to="/edit">
                <button className="button-edit mt-5">
                    Изменить данные
                </button>
            </Link>
        </div>
    );
}