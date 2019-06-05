import jwt from 'jsonwebtoken';
import validateUser from '../helpers/signin';
import users from '../models/users';

const signin = (req,res) => {
    const { error } = validateUser.validation(req.body);
    if(error){
        res.status(400).json({
            status: 400,
            error: error.details[0].message
        });
        return;
    };

    const user = users.find(u => u.email === req.body.email);
    if(!user) {
        res.status(400).json({
            status:400,
            error: 'incorrect email or password',
        });
        return;
    };
    if(!user.password) {
        res.status(400).json({
            status:400,
            error: 'incorrect email or password',
        });
        return;
    };

    const payload = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        adress: user.adress,
        is_admin: user.is_admin,
    };
    const token = jwt.sign(payload, 'secret_key', { expiresIn: '24hrs' });
    res.status(200).json({
        token,
        status: 200,
        data: {
            email: user.email,
            password: user.password
        }
    });
};

export default signin;