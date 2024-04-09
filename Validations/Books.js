import Joi from "joi";

class BookValidation {

    static createBook(newBook) {
        const Schema = Joi.object({
            name: Joi.string().required()
        });

        const { error } = Schema.validate(newBook);

        if (error) {
            return { type: false, message: error.details[0].message };
        }

        return { type: true };
    }
    
}

export default BookValidation;