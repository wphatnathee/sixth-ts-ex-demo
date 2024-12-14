import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source.js";
import { Movie } from "../entity/movie.model.js";
export class MovieRepository {
    moviesRepository: Repository<Movie>;
    constructor() {
        this.moviesRepository = AppDataSource.getRepository(Movie);
    }

    // create and update
    async saveMovie(movie: Movie): Promise<Movie> {
        return this.moviesRepository.save(movie);
    }

    // read
    async getMovies(): Promise<Movie[]> {
        return this.moviesRepository.find();
    }

    async getMovieById(id: string): Promise<Movie | null> {
        return this.moviesRepository.findOneBy({
            id: id,
        });
    }

    // delete
    async deleteMovie(id: string): Promise<void> {
        await this.moviesRepository.delete(id);
    }


}