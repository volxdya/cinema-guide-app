import {HttpException, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Film} from './film.model';
import {FilmDto} from './dto/filmDto';
import {GenreService} from '../genre/genre.service';
import {Genre} from '../genre/genre.model';

@Injectable()

export class FilmService {
    constructor(
        @InjectModel(Film)
        private readonly filmService: typeof Film,
        private readonly genreService: GenreService,
    ) {
    }

    async create(dto: FilmDto): Promise<Film> {
        const film = await this.filmService.create(dto);
        const genre = await this.genreService.getOneGenre(dto.genreTitle);

        await film.$add('Genres', [genre]);

        return film;
    }

    async getOne(id: number) {
        const film = await this.filmService.findOne({where: {id}});

        return film;
    }

    async getAll() {
        const films = await this.filmService.findAll({include: [Genre]});

        return films;
    }

    async getByTitle(title: string) {
        const film = await this.filmService.findOne({where: {title}});

        if (!film) {
            throw new HttpException({message: 'Не найдено'}, 404);
        } else {
            return film;
        }
    }

    async getRandomFilm() {
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        const count = (await this.filmService.findAll()).length + 1;
        let film;

        if (count > 0) {
            film = await this.filmService.findOne({where: {id: getRandom(1, count)}, include: {all: true}});
        }

        while (!film) {
            film = await this.filmService.findOne({where: {id: getRandom(1, count)}, include: {all: true}});
        }

        return film;
    }

    async update(id: number, dto: FilmDto) {

        const film = await this.filmService.findOne({where: {id: id}});

        await film.update({
            title: dto.title,
            description: dto.description,
            image: dto.image,
            revenue: dto.revenue,
            budget: dto.budget,
            year: dto.year,
            time: dto.time,
            rating: dto.rating,
        });

        return film;
    }

    async delete(id: number) {
        const film = await this.filmService.destroy({where: {id: id}});

        return film;
    }

    async getWithLimit(limit: number) {
        const films = await this.filmService.findAll();

        if (films.length < limit) {
            return new HttpException({message: "Нет столько фильмов"}, 404);
        }

        const filmsLimit = await this.filmService.findAll({limit: limit});

        return filmsLimit;
    }

    async searchFilms(valueInput: string) {
        const films = await this.filmService.findAll({include: {all: true}});


        // поиск фильма по title нижнему регистру через значение в input'e фронтенда
        const filmsSearch = films.filter((item) => item.title.toLowerCase().includes(valueInput.toLowerCase()));

        // if (filmsSearch.length === 0) {
        //     return new HttpException({message: "No search results found"}, 404);
        // }

        return filmsSearch;
    }

    async getUserFilm() {
        const films = await this.filmService.findAll({include: {all: true}});

        // params: filmId: number, userId: number

        // const userFilm = await this.filmService.findOne({where: {id: filmId}});
        //
        // for (let i = 0; i < films.length; i++){
        //     if (films[i].id === filmId){}
        // }

        return films;
    }
}
