import {SearchIcon} from "../../../icons/SearchIcon.tsx";
import './SearchHeader.css';
import Modal from "../../../store/modal.ts";
import {observer} from "mobx-react-lite";

export const SearchHeader = observer(() => (
    <>
        <div className="d-xl-flex d-none align-items-center pe-5">
            <form className="w-100 me-3" role="search">
                <input
                    type="search"
                    className="input-header"
                    placeholder="Поиск"
                    onClick={() => Modal.setCurrent("search")}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"/>
            </form>
        </div>

        <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => Modal.setCurrent("search")}
            className="d-xl-none d-block">
            <SearchIcon/>
        </button>
    </>
));