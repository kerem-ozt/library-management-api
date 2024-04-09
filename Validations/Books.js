import Joi from "joi";

class BookValidation {
    static createBook() {
        return Joi.object().keys({
        name: Joi.string().required(),
        });
    }
}

export default BookValidation;