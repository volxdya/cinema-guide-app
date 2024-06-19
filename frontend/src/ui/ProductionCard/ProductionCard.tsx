import {Link} from "react-router-dom";

interface Props {
    title: string;
    id: number;
}

export function ProductionCard({title, id}: Props) {
    return (
        <Link to={"/production/" + id}>
            <div className="main-card">
                <img src="https://ruafisha.ru/images/ratings/production/yanka.jpg" alt={"Картинка продакшена"}/>
                <div className="card-title">
                    <p className="text-center">{title}</p>
                </div>
            </div>
        </Link>
    )
}