import UserService from '../Services/Users';
import UserValidation from '../Validations/Users';

class UserController {

    static async getUsers(req, res) {
        try {
            const { page, limit, sortBy, sortOrder, filter } = req.query;
    
            const filterObj = filter ? JSON.parse(filter) : {};
            const result = await UserService.getUsers(
                page ? parseInt(page) : 1, 
                limit ? parseInt(limit) : 100, 
                sortBy || 'createdAt', 
                sortOrder || 'ASC', 
                filterObj,
                req.decoded.language
            );
            
            if (!result.type) return res.status(404).json({ message: result.message });
            return res.status(200).json({ message: result.message, data: result.data});
        } 
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    static async getUser(req, res) {
        const { id } = req.params;
        try {
            const result = await UserService.getUser(id);
            if (!result.type) return res.status(404).json({ message: result.message });
            return res.status(200).json({ message: result.message, data: result.data });
        } 
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async createUser(req, res) {
        const newUser = req.body;
        try {
            const ValidationResult = UserValidation.createUser(newUser);
            if (!ValidationResult.type) return res.status(400).json({ type: false, message: ValidationResult.message });

            const result = await UserService.createUser(newUser);
            if (!result.type) return res.status(400).json({ message: result.message });

            return res.status(201).json({ message: result.message, data: result.data });
        } 
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async borrowBook(req, res){
        const {book_id, user_id} = req.params;
        try {
            const ValidationResult = UserValidation.borrowBook(book_id, user_id);
            if (!ValidationResult.type) return res.status(400).json({ type: false, message: ValidationResult.message });

            const result = await UserService.borrowBook(book_id, user_id);
            if (!result.type) return res.status(400).json({ message: result.message });
            
            return res.status(201).json({ message: result.message, data: result.data });
        } 
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async returnBook(req, res){
        const {book_id, user_id} = req.params;
        const score = req.body.score;
        try {
            const ValidationResult = UserValidation.returnBook(book_id, user_id, score);
            if (!ValidationResult.type) return res.status(400).json({ type: false, message: ValidationResult.message });

            const result = await UserService.returnBook(book_id, user_id, score);
            if (!result.type) return res.status(400).json({ message: result.message });
            
            return res.status(201).json({ message: result.message, data: result.data });
        } 
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
}

export default UserController;