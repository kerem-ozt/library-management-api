import UserService from '../Services/Users';

class UserController {
        
    static async getUsers(req, res) {
        try {
            const users = await UserService.getUsers();
            return res.status(200).json({ users });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async getUser(req, res) {
        const { id } = req.params;
        try {
            const user = await UserService.getUser(id);
            if (user) {
                return res.status(200).json({ user });
            }
            return res.status(404).send('User with the specified ID does not exists');
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async createUser(req, res) {
        const newUser = req.body;
        try {
            const createdUser = await UserService.createUser(newUser);
            return res.status(201).json({ user: createdUser });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async borrowBook(req, res){
        const {book_id, user_id} = req.params;
        try {
            const borrowedBook = await UserService.borrowBook(book_id, user_id);
            return res.status(200).json({ borrowedBook });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async returnBook(req, res){
        const {book_id, user_id} = req.params;
        const score = req.body.score;
        try {
            const returnedBook = await UserService.returnBook(book_id, user_id, score);
            return res.status(200).json({ returnedBook });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
}

export default UserController;