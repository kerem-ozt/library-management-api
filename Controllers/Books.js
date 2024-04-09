import BookService from "../Services/Books";
import BookValidation from "../Validations/Books";

class BookController {

    static async getBooks(req, res) {
        try {
            const { page, limit, sortBy, sortOrder, filter } = req.query;

            const filterObj = filter ? JSON.parse(filter) : {};

            const result = await BookService.getBooks(
                page ? parseInt(page) : 1,
                limit ? parseInt(limit) : 100,
                sortBy || 'createdAt',
                sortOrder || 'ASC',
                filterObj
            );

            if (!result.type) return res.status(404).json({ message: result.message });
            return res.status(200).json({ message: result.message, data: result.data });

        } 
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async getBook(req, res) {
        const { id } = req.params;
        try {
            const result = await BookService.getBook(id);
            if (!result.type) return res.status(404).json({ message: result.message });
            return res.status(200).json({ message: result.message, data: result.data });
        } 
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async createBook(req, res) {
        const newBook = req.body;
        try {
            const ValidationResult = BookValidation.createBook(newBook);
            if (!ValidationResult.type) return res.status(400).json({ type: false, message: ValidationResult.message });

            const result = await BookService.createBook(newBook);
            if (!result.type) return res.status(400).json({ message: result.message });
            
            return res.status(201).json({ message: result.message, data: result.data });
        } 
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

}

export default BookController;