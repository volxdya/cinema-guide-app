import {Search} from "../../Search/Search.tsx";
import {SearchIcon} from "../../../icons/SearchIcon.tsx";
import './SearchHeader.css';

export function SearchHeader() {
    return (
        <>
            <div className="d-xl-flex d-none align-items-center pe-5">
                <form className="w-100 me-3" role="search">
                    <input type="search" className="input-header" placeholder="Поиск" data-bs-toggle="modal"
                           data-bs-target="#exampleModal"/>
                    <Search/>
                </form>
            </div>

            <button data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="d-xl-none d-block">
                <SearchIcon/>
            </button>
        </>
    )
}