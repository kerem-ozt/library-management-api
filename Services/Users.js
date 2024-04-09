import db from '../src/models/index';
import moment from 'moment';

class UserService {
    
    static async getUsers(page = 1, limit = 100, sortBy = 'createdAt', sortOrder = 'ASC', filter = {}) {
        try {
            let offset = (page - 1) * limit;

            const users = await db.Users.findAll({
                where: filter,
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit
            });
    
            if (users.length === 0) return { type: false, data: [], message: 'No users found' };
            return { type: true, data: users, message: 'Users successfully retrieved' };
        }
        catch (error) {
            return { type: false, message: error.message };
        }
    }

    static async getUser(id) {
        try {
            const user = await db.Users.findByPk(id);

            if (!user) return { type: false, data: [], message: 'User not found' };
            return { type: true, data: user, message: 'User successfully retrieved'};
        } 
        catch (error) {
            return { type: false, message: error.message };
        }
    }
    
    static async createUser(newUser) {
        try {
            const user = await db.Users.create(newUser);

            return { type: true, data: user, message: 'User created successfully'};
        } 
        catch (error) {
            return { type: false, message: error.message };
        }
    }
    
    static async borrowBook(book_id, user_id) {
        try {
            const book = await db.Books.findByPk(book_id);
            if (!book) return { type: false, message: 'Book not found' };

            const user = await db.Users.findByPk(user_id);
            if (!user) return { type: false, message: 'User not found' };

            let existingBorrow = await db.Borrows.findOne({ where: { book_id, user_id } });
            if (existingBorrow) return { type: false, message: 'Book already borrowed' };

            const borrow = await db.Borrows.create({ book_id, user_id, borrow_date: moment(), return_date: moment().add(7, 'days')});
            return { type: true, data: borrow, message: 'Book borrowed successfully'};
        } 
        catch (error) {
            return { type: false, message: error.message };
        }
    }

    static async returnBook(book_id, user_id, score) {
        const transaction = await db.sequelize.transaction();
        try {
            const book = await db.Books.findByPk(book_id);
            if (!book) return { type: false, message: 'Book not found' };

            const user = await db.Users.findByPk(user_id);
            if (!user) return { type: false, message: 'User not found' };

            await db.Ratings.create({ book_id, user_id, rating: score, rating_date: moment() }, { transaction });
    
            const destroyResult = await db.Borrows.destroy({
                where: { book_id, user_id },
                transaction
            });
    
            if (destroyResult === 0) {
                throw new Error('Borrow record not found');
            }
    
            const ratings = await db.Ratings.findAll({
                where: { book_id },
                attributes: [[db.sequelize.fn('AVG', db.sequelize.col('rating')), 'average_rating']],
                transaction
            });
    
            const averageRating = ratings[0].get('average_rating');
            
            await db.Books.update({ average_rating: averageRating }, { where: { id: book_id }, transaction });
    
            await transaction.commit();
    
            return { type: true, message: 'Book returned successfully' };
        } catch (error) {
            await transaction.rollback();
            return { type: false, message: error.message };
        }
    } 

}

export default UserService;