import db from '../src/models/index';
import LanguageHelper from '../Middleware/LanguageHelper';

class BookService{

    static async getBooks(page = 1, limit = 100, sortBy = 'createdAt', sortOrder = 'ASC', filterObj = {}, language){
        try{
            let offset = (page - 1) * limit;

            const books = await db.Books.findAll({
                where: filterObj,
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit
            });

            if(books.length === 0) return {type: false, data: [], message: LanguageHelper(language, 'get_book_not_found')};
            return {type: true, data: books, message: LanguageHelper(language, 'get_book_success')};
        }
        catch(error){
            return {type: false, message: error.message};
        }
    }

    static async getBook(id, language){
        try{
            const book = await db.Books.findByPk(id);

            if(!book) return {type: false, data: [], message: LanguageHelper(language, 'get_book_not_found')};
            return {type: true, data: book, message: LanguageHelper(language, 'get_book_success')};
        }
        catch(error){
            return {type: false, message: error.message};
        }
    }

    static async createBook(newBook, language){
        try{
            const book = await db.Books.create(newBook);

            return {type: true, data: book, message: LanguageHelper(language, 'create_book_success')};
        }
        catch(error){
            return {type: false, message: error.message};
        }
    }

}

export default BookService;