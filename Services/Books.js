import db from '../src/models/index';

class BookService{

    static async getBooks(page = 1, limit = 100, sortBy = 'createdAt', sortOrder = 'ASC', filterObj = {}){
        try{
            let offset = (page - 1) * limit;

            const books = await db.Books.findAll({
                where: filterObj,
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit
            });

            if(books.length === 0) return {type: false, data: [], message: 'No books found'};
            return {type: true, data: books, message: 'Books successfully retrieved'};
        }
        catch(error){
            return {type: false, message: error.message};
        }
    }

    static async getBook(id){
        try{
            const book = await db.Books.findByPk(id);

            if(!book) return {type: false, data: [], message: 'Book not found'};
            return {type: true, data: book, message: 'Book successfully retrieved'};
        }
        catch(error){
            return {type: false, message: error.message};
        }
    }

    static async createBook(newBook){
        try{
            const book = await db.Books.create(newBook);

            return {type: true, data: book, message: 'Book created successfully'};
        }
        catch(error){
            return {type: false, message: error.message};
        }
    }

}

export default BookService;