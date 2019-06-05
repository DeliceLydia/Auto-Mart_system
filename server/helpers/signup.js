import Joi from 'joi';

const signup = {
    validation(newUser) {
        const user = {
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            address: Joi.string(),
            is_admin: Joi.boolean()
        };
        return Joi.validate(newUser, user);
    }
};
export default signup;