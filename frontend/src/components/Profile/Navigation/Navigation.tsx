import {Heart} from "../../../icons/Heart.tsx";
import {Person} from "../../../icons/Person.tsx";
import '../Profile.css';

interface Props {
    setCurrent: React.Dispatch<React.SetStateAction<string>>;
    current: string;
}

export function Navigation({setCurrent, current}: Props) {


    return (
        <nav className="d-flex gap-xl-5 gap-4 py-5 navigation-profile justify-content-xl-start justify-content-center">

            <span className="d-xl-inline d-none">
                <span className={current === "favorites" ? "active link" : "link"}>
                    <Heart/>
                    <span className="px-2" onClick={() => setCurrent("favorites")}>Избранные фильмы</span>
                </span>
            </span>

            <span className="d-xl-inline d-none">
                <span className={current === "settings" ? "active link" : "link"}>
                    <Person/>
                    <span className="px-2" onClick={() => setCurrent("settings")}>Настройка аккаунта</span>
                </span>
            </span>

            <span className="d-xl-none d-inline">
                <span className={current === "favorites" ? "active link" : "link"}>
                    <Heart/>
                    <span className="px-2" onClick={() => setCurrent("favorites")}>Избранное</span>
                </span>
            </span>

            <span className="d-xl-none d-inline">
                <span className={current === "settings" ? "active link" : "link"}>
                    <Person/>
                    <span className="px-2" onClick={() => setCurrent("settings")}>Настройки</span>
                </span>
            </span>

        </nav>

    )
}