import { AppDataSource } from '../../data-source.js';
import { Comment } from '../entity/comment.model.js';
export const CommentRepository = AppDataSource.getRepository(Comment);

// export class CommentRepository {
//     commentsRepository: Repository<Comment>;
//     constructor() {
//         this.commentsRepository = AppDataSource.getRepository(Comment);
//     }
//     // create and update
//     async saveComment(comment: Comment) {
//         return this.commentsRepository.save(comment);
//     }
//     // read
//     async getComments() {
//         return this.commentsRepository.find();
//     }
//     async getCommentById(id: string) {
//         return this.commentsRepository.findOneBy({
//             id: id,
//         });
//     }
//     // delete
//     async deleteComment(id: string) {
//         await this.commentsRepository.delete(id);
//     }
// }
