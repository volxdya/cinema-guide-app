import './Header.css';

export function Header() {

    return (
        <header className="header main-container mt-2 mb-2">
            <div className="d-grid gap-3" style={{
                gridTemplateColumns: "10fr 10fr 15fr 1fr"
            }}>
                <a href="#"
                   className="col-lg-4 link-body-emphasis text-decoration-none">
                    <h1 className="header-title">
                        Cinema
                    </h1>
                </a>

                <div className="links-header d-flex align-items-center me-5">
                    <a href="#" className="link-header">Главная</a>
                    <a href="#" className="link-header">Жанры</a>
                </div>

                <div className="d-flex align-items-center pe-5">
                    <form className="w-100 me-3" role="search">
                        <input type="search" className="input-header" placeholder="Поиск" aria-label="Search"/>
                    </form>
                </div>

                <div className="d-flex align-items-center px-3">
                    <a href="#" className="link-header">Войти</a>
                </div>
            </div>
        </header>
    );
}