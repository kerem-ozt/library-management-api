import db from '../src/models/index';
import moment from 'moment';
import LanguageHelper from '../Middleware/LanguageHelper';

class UserService {
    
    static async getUsers(page = 1, limit = 100, sortBy = 'createdAt', sortOrder = 'ASC', filter = {}, language) {
        try {
            let offset = (page - 1) * limit;

            const users = await db.Users.findAll({
                where: filter,
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit
            });
    
            if (users.length === 0) return { type: false, data: [], message: LanguageHelper(language, 'get_user_not_found') };
            return { type: true, data: users, message: LanguageHelper(language, 'get_user_success') };
        }
        catch (error) {
            return { type: false, message: error.message };
        }
    }

    static async getUser(id, language) {
        try {
          const user = await db.Users.findByPk(id, {
            attributes: ['id', 'name'],
            include: [
              {
                model: db.Borrows,
                include: [
                  {
                    model: db.Books,
                    attributes: ['name'],
                  },
                ],
              },
            ],
          });
    
          if (!user) {
            return { type: false, data: [], message: LanguageHelper(language, 'get_user_not_found') };
          }
    
          const books = {
            past: [],
            present: [],
          };
    
          user.Borrows.forEach((borrow) => {
            if (borrow.return_date) {
              books.past.push({
                name: borrow.Book.name,
                userScore: borrow.rating,
              });
            } else {
              books.present.push({
                name: borrow.Book.name,
              });
            }
          });
    
          return {
            type: true,
            data: {
              id: user.id,
              name: user.name,
              books,
            },
            message: LanguageHelper(language, 'get_user_success'),
          };
        } catch (error) {
          return { type: false, message: error.message };
        }
    }
    
    static async createUser(newUser, language) {
        try {
            const user = await db.Users.create(newUser);

            return { type: true, data: user, message: LanguageHelper(language, 'create_user_success')};
        } 
        catch (error) {
            return { type: false, message: error.message };
        }
    }
    
    static async borrowBook(book_id, user_id, language) {
        try {
            const book = await db.Books.findByPk(book_id);
            if (!book) return { type: false, message: LanguageHelper(language, 'get_book_not_found') };

            const user = await db.Users.findByPk(user_id);
            if (!user) return { type: false, message: LanguageHelper(language, 'get_user_not_found') };

            let existingBorrow = await db.Borrows.findOne({ where: { book_id, user_id } });
            if (existingBorrow) return { type: false, message: LanguageHelper(language, 'borrow_book_fail') };

            const borrow = await db.Borrows.create({ book_id, user_id, borrow_date: moment(), return_date: moment().add(7, 'days')});
            return { type: true, data: borrow, message: LanguageHelper(language, 'borrow_book_success')};
        } 
        catch (error) {
            return { type: false, message: error.message };
        }
    }

    static async returnBook(book_id, user_id, score, language) {
        const transaction = await db.sequelize.transaction();
        try {
            const book = await db.Books.findByPk(book_id);
            if (!book) return { type: false, message: LanguageHelper(language, 'get_book_not_found') };

            const user = await db.Users.findByPk(user_id);
            if (!user) return { type: false, message: LanguageHelper(language, 'get_user_not_found') };

            await db.Ratings.create({ book_id, user_id, rating: score, rating_date: moment() }, { transaction });
    
            const destroyResult = await db.Borrows.destroy({
                where: { book_id, user_id },
                transaction
            });
    
            if (destroyResult === 0) {
                throw new Error(LanguageHelper(language, 'get_borrow_not_found'));
            }
    
            const ratings = await db.Ratings.findAll({
                where: { book_id },
                attributes: [[db.sequelize.fn('AVG', db.sequelize.col('rating')), 'average_rating']],
                transaction
            });
    
            const averageRating = ratings[0].get('average_rating');
            
            await db.Books.update({ average_rating: averageRating }, { where: { id: book_id }, transaction });
    
            await transaction.commit();
    
            return { type: true, message: LanguageHelper(language, 'return_book_success') };
        } catch (error) {
            await transaction.rollback();
            return { type: false, message: error.message };
        }
    } 

}

export default UserService;