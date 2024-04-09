import express from 'express';
import BooksController from '../Controllers/Books';

const BooksRouter = express.Router();

BooksRouter.get('/', BooksController.getBooks);
BooksRouter.get('/:id', BooksController.getBook);
BooksRouter.post('/', BooksController.createBook);

export default BooksRouter;