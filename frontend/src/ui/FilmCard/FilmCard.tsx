import './FilmCard.css';

interface Props {
    image: string;
    title: string;
    id: number;
    index: number;
}

export function FilmCard({image, title, index}: Props){
    return (
        <div className="film-card">
            <span className="top-film-card">{index + 1}</span>
            <img src={image} alt={"Картинка фильма " + title}/>
        </div>
    )
}