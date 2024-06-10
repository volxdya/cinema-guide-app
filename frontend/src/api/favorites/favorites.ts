import axios from "axios";

export function addFavorites(filmId: number, userId: number) {
    axios.post(`${import.meta.env.VITE_API_URL}/user/add_favorite`, {
        filmId: filmId,
        userId: userId
    }).then((response) => {
        console.log(response.data.data);
    }).catch(err => {
        console.log(err);
    });
}