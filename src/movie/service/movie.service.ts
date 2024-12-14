import { MovieRepository } from "../repository/movie.repository.js";
import { CommentRepository } from "../repository/comment.repository.js";
import { Movie } from "../entity/movie.model.js";
import { MovieRequest } from "../payload/request/movie.request.js";

export class MovieService {
    movieRepository: MovieRepository;
    commentRepository: CommentRepository;
    constructor() {
        this.movieRepository = new MovieRepository();
        this.commentRepository = new CommentRepository();
    }
    async saveMovie(movie: MovieRequest) {
        const newMovie = new Movie();
        newMovie.title = movie.title;
        newMovie.description = movie.description;
        newMovie.releaseDate = movie.releaseDate;
        return this.movieRepository.saveMovie(newMovie);
    }
    async getMovies() {
        return this.movieRepository.getMovies();
    }
    async getMovieById(id: string) {
        return this.movieRepository.getMovieById(id);
    }
    async deleteMovie(id: string) {
        await this.movieRepository.deleteMovie(id);
    }
}