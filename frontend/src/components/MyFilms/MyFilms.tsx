import {FilmCard} from "../../ui/FilmCard/FilmCard.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import films from "../../store/films.ts";
import {observer} from "mobx-react-lite";
import {film} from "../../interfaces/api/film.ts";
import uniqid from "uniqid";
import users from "../../store/users.ts";
import Modal from "../../store/modal.ts";

const MyFilms = observer(() => {
    const [isMyFilms, setIsMyFilms] = useState(true);

    const {id} = useParams();

    let prodId = 0;

    if (id) {
        prodId = Number(id);
    }


    useEffect(() => {
        films.getProductionFilms(prodId);

        users.getUserData();

        users.getFullUserData(users.userData.login);
    }, []);

    useEffect(() => {
        if (users.fullUserData.productions) {
            for (let i = 0; i < users.fullUserData.productions.length; i++) {
                if (users.fullUserData.productions[i].id !== prodId) {
                    setIsMyFilms(false);
                }
            }
        }
    }, []);

    function create() {
        Modal.setCurrent("film");
    }

    if (!isMyFilms) {
        return (
            <div className="main-container mt-5">
                {films.productionFilms && (
                    <>
                        {films.productionFilms.length === 0 && (
                            <h1 className="my-5">У вашего продакшена пока нет фильмов.</h1>
                        )}

                        <div className="d-flex flex-wrap gap-5">
                            {films.productionFilms.map((item: film, index: number) => {
                                return (
                                    <FilmCard id={item.id}
                                              index={index}
                                              title={item.title}
                                              image={item.image}
                                              key={uniqid()}
                                    />
                                );
                            })}
                        </div>

                    </>
                )}
                <button className="purple-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={create}>Добавить</button>

            </div>
        );
    }

    return  (
        <div className="main-container mt-5">
            <h1>Извините, вы не имеете доступа к этому продакшену.</h1>
        </div>
    );
});

export default MyFilms;