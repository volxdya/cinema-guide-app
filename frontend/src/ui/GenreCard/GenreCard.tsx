import './GenreCard.css';

interface Props {
    title: string,
    image: string;
    id: number;
}

export function GenreCard({title, image}: Props) {
    return (
        <div className="genre-card">
            <img src={image} alt={"Картинка жанра " + title}/>
            <div className="genre-card-title">
                <p className="text-center">{title}</p>
            </div>
        </div>
    )
}