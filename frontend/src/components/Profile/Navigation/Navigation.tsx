import {Heart} from "../../../icons/Heart.tsx";
import {Person} from "../../../icons/Person.tsx";

export function Navigation() {
    return (
        <nav className="d-flex gap-5 py-5 navigation-profile">
                <span className="link">
                    <Heart/>
                    <span className="px-2">Избранные фильмы</span>
                </span>
            <span className="active link">
                    <Person/>
                    <span className="px-2">Настройка аккаунта</span>
                </span>
        </nav>

    )
}