import {Footer} from "../Footer/Footer.tsx";
import './Search.css';
import {FilmCardSearch} from "../../ui/FIlmCardSearch/FIlmCardSearch.tsx";
import {ChangeEvent, useState} from "react";
import films from "../../store/films.ts";
import {film} from "../../interfaces/film.ts";
import {NoSearch} from "../../icons/NoSearch.tsx";
import uniqid from "uniqid";


export function Search() {

    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);

        films.getByInputValue(searchValue);
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-search">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="input-header search-input mb-2 mt-2"
                            value={searchValue}
                            onChange={handleChange}
                            maxLength={35}
                        />
                        {films.searchFilms.map((item: film) => {
                            return (
                                <FilmCardSearch
                                    title={item.title}
                                    rating={item.rating}
                                    image={item.image}
                                    time={item.time}
                                    year={item.year}
                                    id={item.id}
                                    key={uniqid()}
                                />
                            );
                        })}
                        {films.searchFilms.length == 0 && searchValue.length >= 3 && (
                            <div className="text-center py-4">
                                <NoSearch/>
                                <p className="mt-2 fs-6">Ничего не найдено по запросу
                                    <span className="search-value-no-results px-1">"{searchValue}"</span>
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
}