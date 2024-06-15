import {Footer} from "../Footer/Footer.tsx";
import './Search.css';
import {SearchFilmBody} from "./SearchFilmBody/SearchFilmBody.tsx";


export function Search() {

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-search">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <SearchFilmBody/>
                    <div className="modal-footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
}