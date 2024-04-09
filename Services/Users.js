import db from '../src/models/index';
import {Op} from 'sequelize';

class UserService {
    
    static async getUsers() {
        return await db.Users.findAll();
    }

    static async getUser(id) {
        return await db.Users.findByPk(id);
    }

    static async createUser(newUser) {
        return await db.Users.create(newUser);
    }

    static async borrowBook(book_id, user_id){
        return await db.Borrows.create({book_id: book_id, user_id: user_id});
    }

    static async returnBook(book_id, user_id, score) {
        const transaction = await db.sequelize.transaction();
        try {
            await db.Ratings.create({ book_id: book_id, user_id: user_id, rating: score }, { transaction });
    
            const destroyResult = await db.Borrows.destroy({
                where: { book_id: book_id, user_id: user_id },
                transaction
            });
    
            await transaction.commit();
    
            return destroyResult;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }    

}

export default UserService;