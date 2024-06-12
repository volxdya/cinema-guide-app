import './Header.css';
import {Modal} from "../../ui/Modal/Modal.tsx";
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";
import users from "../../store/users.ts";
import {observer} from "mobx-react-lite";
import {getItem} from "../../utils/localStorage.ts";
import {Person} from "../../icons/Person.tsx";
import {SearchIcon} from "../../icons/SearchIcon.tsx";
import {GenreIcon} from "../../icons/GenreIcon.tsx";
import {Search} from "../Search/Search.tsx";

interface navigationHeader {
    link: string;
    title: string;
}

export const Header = observer(() => {

    const url = useLocation();

    const navigation: navigationHeader[] = [
        {
            link: '/',
            title: 'Главная'
        },
        {
            link: '/genres',
            title: 'Жанры'
        }
    ];

    const token = getItem("token");


    useEffect(() => {
        users.getUserData();

        users.getFullUserData(users.userData.login);
    }, [token]);

    return (
        <>
            <header className="main-container mt-2 mb-2 header-pc">
                <div className="d-grid gap-3 header-rows" style={{
                    gridTemplateColumns: "12fr 10fr 15fr 1fr"
                }}>
                    <Link to="/"
                          className="col-lg-4 link-body-emphasis text-decoration-none">
                        <h1 className="header-title">
                            Cinema
                        </h1>
                    </Link>

                    <div className="links-header d-flex align-items-center me-5">
                        {navigation.map((item: navigationHeader) => {
                            return (
                                <Link to={item.link}
                                      key={item.link}
                                      className={url.pathname === item.link ? 'active link' : 'link'}
                                >
                                    {item.title}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="d-flex align-items-center pe-5">
                        <form className="w-100 me-3" role="search">
                            <input type="search" className="input-header" placeholder="Поиск" data-bs-toggle="modal"
                                   data-bs-target="#exampleModal"/>
                            <Search/>
                        </form>
                    </div>

                    <div className="d-flex align-items-center px-3">
                        {!token || token === "" || token === undefined || token === null ? (
                            <button type="button" className="link" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">
                                Войти
                            </button>
                        ) : (
                            <Link to="/profile"
                                  className={url.pathname === "/profile" ? 'active link' : 'link'}>
                                {users.fullUserData.firstName}
                            </Link>
                        )}
                    </div>
                    <Modal/>
                </div>
            </header>

            <header className="mobile d-flex d-xl-none">
                <Link to="/"
                      className="col-lg-4 link-body-emphasis text-decoration-none">
                    <div className="title">
                        <h1 className="header-title">
                            Cinema
                        </h1>
                    </div>
                </Link>

                <div className="d-flex gap-3 navigation-header-mobile">
                    <Link to="/genres">
                        <GenreIcon/>
                    </Link>
                    <SearchIcon/>

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
            </header>
        </>
    );
});