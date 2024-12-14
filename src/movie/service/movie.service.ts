import { MovieRepository } from '../repository/movie.repository.js';
import { CommentRepository } from '../repository/comment.repository.js';
// import { CommentRepository } from '../repository/comment.repository.js';
import { Movie } from '../entity/movie.model.js';
import { Comment } from '../entity/comment.model.js';
import { MovieRequest } from '../payload/request/movie.request.js';
import { CommentRequest } from '../payload/request/comment.request.js';

export class MovieService {
    async saveMovie(movie: MovieRequest) {
        const newMovie = new Movie();
        newMovie.title = movie.title;
        newMovie.description = movie.description;
        newMovie.releaseDate = movie.releaseDate;
        return MovieRepository.save(newMovie);
    }

    async updateMovie(id: string, movie: MovieRequest) {
        const newMovie = new Movie();
        newMovie.title = movie.title;
        newMovie.description = movie.description;
        newMovie.releaseDate = movie.releaseDate;
        return MovieRepository.update(id, newMovie);
    }

    async getMovies() {
        return MovieRepository.find();
    }
    async getMovieById(id: string) {
        return MovieRepository.findOneBy({
            id: id,
        });
    }
    async deleteMovie(id: string) {
        await MovieRepository.delete(id);
    }

    // comment
    async addComment(movie_id: string, request: CommentRequest) {
        const movie = await MovieRepository.findOneBy({
            id: movie_id,
        });
        if (!movie) {
            throw new Error('Movie not found');
        }
        const comment = new Comment();
        comment.content = request.content;
        comment.rating = request.rate;
        comment.movie = movie;
        return CommentRepository.save(comment);
    }

    async updateComment(comment_id: string, request: CommentRequest) {
        const comment = await CommentRepository.findOneBy({
            id: comment_id,
        });
        if (!comment) {
            throw new Error('Comment not found');
        }
        comment.content = request.content;
        comment.rating = request.rate;
        return CommentRepository.update(comment_id, comment);
    }

    async deleteComment(comment_id: string) {
        await CommentRepository.delete(comment_id);
    }
}
