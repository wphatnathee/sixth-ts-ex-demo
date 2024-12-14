import { Router } from 'express';
import { MovieController } from '../controller/movie.controller.js';

const movieRouter = Router();
const movieController = new MovieController();

// movie feature
movieRouter.get('/', movieController.getAllMovies);
movieRouter.get('/:id', movieController.getMovieById);
movieRouter.post('/', movieController.createMovie);
movieRouter.put('/:id', movieController.updateMovie);
movieRouter.delete('/:id', movieController.deleteMovie);

// comment feature
movieRouter.post('/:id/comment', movieController.addComment);
movieRouter.get('/:id/comment/:comment_id', movieController.getCommentById);
movieRouter.put('/:id/comment/:comment_id', movieController.updateComment);
movieRouter.delete('/:id/comment/:comment_id', movieController.deleteComment);

export default movieRouter;
