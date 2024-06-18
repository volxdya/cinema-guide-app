import {Heart} from "../../../icons/Heart.tsx";
import {Person} from "../../../icons/Person.tsx";
import '../Profile.css';
import {Movie} from "../../../icons/Movie.tsx";
import {Link, useLocation} from "react-router-dom";
import {Favorites} from "../Favorites/Favorites.tsx";
import {Productions} from "../Productions/Productions.tsx";
import {Settings} from "../Settings/Settings.tsx";
import * as React from "react";

interface INavigationProfile {
    link: string;
    title: string;
    svg: React.ReactNode;
    component: React.ReactNode;
}

export function Navigation() {


    const navigationProfile: INavigationProfile[] = [{
        link: "/profile/favorites",
        title: "Избранные фильмы",
        svg: <Heart/>,
        component: <Favorites/>
    }, {
        link: "/profile/settings",
        title: "Настройки аккаунта",
        svg: <Person/>,
        component: <Settings/>
    }, {
        link: "/profile/productions",
        title: "Продакшены",
        svg: <Movie/>,
        component: <Productions/>
    }, {
        link: "/profile/admin",
        title: "Админка",
        svg: <Person/>,
        component: <Productions/>
    }]

    const url = useLocation();

    return (
        <>
            <nav
                className="d-flex gap-xl-5 gap-4 py-5 navigation-profile justify-content-xl-start justify-content-center">

                {navigationProfile.map((item) => {
                    return (
                        <Link to={item.link}>
                            <span className="d-xl-inline d-none">
                                <span className={item.link === url.pathname ? "active link" : "link"}>
                                    {item.svg}
                                    <span className="px-2">{item.title}</span>
                                </span>
                            </span>
                        </Link>
                    );
                })}


                {/*<span className="d-xl-none d-inline">*/}
                {/*    <span className={current === "favorites" ? "active link" : "link"}>*/}
                {/*        <Heart/>*/}
                {/*        <span className="px-2" onClick={() => setCurrent("favorites")}>Избранное</span>*/}
                {/*    </span>*/}
                {/*</span>*/}

                {/*<span className="d-xl-none d-inline">*/}
                {/*    <span className={current === "settings" ? "active link" : "link"}>*/}
                {/*        <Person/>*/}
                {/*        <span className="px-2" onClick={() => setCurrent("settings")}>Настройки</span>*/}
                {/*    </span>*/}
                {/*</span>*/}

            </nav>

            {navigationProfile.map((item) => {
                return (
                    <>
                        {item.link === url.pathname && (
                            <>
                                {item.component}
                            </>
                        )}
                    </>
                );
            })}
        </>

    )
}