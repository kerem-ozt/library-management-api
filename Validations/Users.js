import Joi from 'joi';

class UserValidation {

  static createUser(newUser) {
    const Schema = Joi.object({
      name: Joi.string().required()
    });
    
    const { error } = Schema.validate(newUser);

    if (error) {
      return { type:false, message: error.details[0].message };
    }

    return { type: true };
  }

  static borrowBook(book_id, user_id) {
    const Schema = Joi.object({
      book_id: Joi.number().required(),
      user_id: Joi.number().required()
    });

    const { error } = Schema.validate({ book_id, user_id });

    if (error) {
      return { type: false, message: error.details[0].message };
    }

    return { type: true };
  }

  static returnBook(book_id, user_id, score) {
    const Schema = Joi.object({
      book_id: Joi.number().required(),
      user_id: Joi.number().required(),
      score: Joi.number().required()
    });

    const { error } = Schema.validate({ book_id, user_id, score });

    if (error) {
      return { type: false, message: error.details[0].message };
    }

    return { type: true };
  }

}

export default UserValidation;