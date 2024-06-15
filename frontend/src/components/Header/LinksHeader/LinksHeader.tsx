import {Link, useLocation} from "react-router-dom";


interface navigationHeader {
    link: string;
    title: string;
}

export function LinksHeader() {
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

    return (
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
    );
}