import Joi from 'joi';

class UserValidation {

  static createUser() {
    return Joi.object().keys({
      name: Joi.string().required(),
    });
  }

}

export default UserValidation;