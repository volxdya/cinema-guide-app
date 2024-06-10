import {Heart} from "../../../icons/Heart.tsx";
import {Person} from "../../../icons/Person.tsx";

interface Props {
    setCurrent:  React.Dispatch<React.SetStateAction<string>>;
    current: string;
}

export function Navigation({setCurrent, current}: Props) {


    return (
        <nav className="d-flex gap-5 py-5 navigation-profile">

            <span className={current === "favorites" ? "active link" : "link"}>
                <Heart/>
                <span className="px-2" onClick={() => setCurrent("favorites")}>Избранные фильмы</span>
            </span>

            <span className={current === "settings" ? "active link" : "link"}>
                    <Person/>
                    <span className="px-2" onClick={() => setCurrent("settings")}>Настройка аккаунта</span>
            </span>

        </nav>

    )
}