import './Header.css';
import {Modal} from "../../ui/Modal/Modal.tsx";
import {Link, useLocation} from "react-router-dom";

interface navigationHeader {
    link: string;
    title: string;
}

export function Header() {

    const url = useLocation();

    const navigation: navigationHeader[] = [{
        link: '/',
        title: 'Главная'
    }, {
        link: '/genres',
        title: 'Жанры'
    }];

    return (
        <header className="header main-container mt-2 mb-2">
            <div className="d-grid gap-3" style={{
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
                            <Link to={item.link} key={item.link} className={url.pathname === item.link ? 'active link-header' : 'link-header'}>{item.title}</Link>
                        )
                    })}
                </div>

                <div className="d-flex align-items-center pe-5">
                    <form className="w-100 me-3" role="search">
                        <input type="search" className="input-header" placeholder="Поиск" aria-label="Search"/>
                    </form>
                </div>

                <div className="d-flex align-items-center px-3">
                    <button type="button" className="link-header" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Войти
                    </button>
                </div>
                <Modal/>
            </div>
        </header>
    );
}