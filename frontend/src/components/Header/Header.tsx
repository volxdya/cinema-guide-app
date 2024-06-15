import './Header.css';
import {ModalWindow} from "../../ui/Modal/Modal.tsx";
import {Link} from "react-router-dom";
import {GenreIcon} from "../../icons/GenreIcon.tsx";
import {MainTitle} from "./MainTitle/MainTitle.tsx";
import {LinksHeader} from "./LinksHeader/LinksHeader.tsx";
import {ProfileHeader} from "./Profile/ProfileHeader.tsx";
import {SearchHeader} from "./Search/SearchHeader.tsx";


export function Header() {

    return (
        <>
            <header className="main-container mt-2 mb-2 header-pc">
                <div className="d-grid gap-3 header-rows" style={{
                    gridTemplateColumns: "12fr 10fr 15fr 1fr"
                }}>
                    <MainTitle/>

                    <LinksHeader/>

                    <SearchHeader/>

                    <ProfileHeader/>
                    <ModalWindow/>
                </div>
            </header>

            <header className="mobile d-flex d-xl-none">
                <MainTitle/>

                <div className="d-flex gap-3 navigation-header-mobile">
                    <Link to="/genres">
                        <GenreIcon/>
                    </Link>
                    <SearchHeader/>

                    <ProfileHeader/>
                </div>
            </header>
        </>
    );
}