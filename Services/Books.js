import db from '../src/models/index';
import {Op} from 'sequelize';

class BookService{

    static async getBooks(){
        return await db.Books.findAll();
    }

    static async getBook(id){
        return await db.Books.findByPk(id);
    }

    static async createBook(newBook){
        return await db.Books.create(newBook);
    }

    static async updateBook(id, updatedBook){
        return await db.Books.update(updatedBook, {
            where: {id: id}
        });
    }

    static async deleteBook(id){
        return await db.Books.destroy({
            where: {id: id}
        });
    }

}

export default BookService;