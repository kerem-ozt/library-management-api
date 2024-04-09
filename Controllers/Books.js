import BookService from "../Services/Books";

class BookController {

    static async getBooks(req, res) {
        try {
            const books = await BookService.getBooks();
            return res.status(200).json({ books });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async getBook(req, res) {
        const { id } = req.params;
        try {
            const book = await BookService.getBook(id);
            if (book) {
                return res.status(200).json({ book });
            }
            return res.status(404).send('Book with the specified ID does not exists');
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async createBook(req, res) {
        const newBook = req.body;
        try {
            const createdBook = await BookService.createBook(newBook);
            return res.status(201).json({ book: createdBook });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async updateBook(req, res) {
        const { id } = req.params;
        const updatedBook = req.body;
        try {
            const [updated] = await BookService.updateBook(id, updatedBook);
            if (updated) {
                const updatedBook = await BookService.getBook(id);
                return res.status(200).json({ book: updatedBook });
            }
            throw new Error('Book not found');
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async deleteBook(req, res) {
        const { id } = req.params;
        try {
            const deleted = await BookService.deleteBook(id);
            if (deleted) {
                return res.status(204).send('Book deleted');
            }
            throw new Error('Book not found');
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

}

export default BookController;