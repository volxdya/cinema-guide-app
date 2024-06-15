import {Link} from "react-router-dom";

export function MainTitle() {
    return (
        <Link to="/"
              className="col-lg-4 link-body-emphasis text-decoration-none">
            <h1 className="header-title">
                Cinema
            </h1>
        </Link>
    )
}