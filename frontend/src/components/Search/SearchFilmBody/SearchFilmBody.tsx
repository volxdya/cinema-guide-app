import films from "../../../store/films.ts";
import {film} from "../../../interfaces/api/film.ts";
import {FilmCardSearch} from "../../../ui/FIlmCardSearch/FIlmCardSearch.tsx";
import uniqid from "uniqid";
import {NoSearch} from "../../../icons/NoSearch.tsx";
import {ChangeEvent, useState} from "react";

export function SearchFilmBody(){

    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);

        films.getByInputValue(searchValue);
    }

    return (
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
    )
}