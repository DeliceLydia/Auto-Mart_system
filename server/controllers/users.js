import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {checkSignup, checkSignin} from '../helpers/validateUser';
import users from '../models/users';

const signup= (req, res) => {
    try {
        const { error } = checkSignup(req.body);
    if (error) {
        res.status(400).json({
            status: 400,
            error: error.details[0].message,
        });
        return;
    }

    const user = users.find(u => u.email === req.body.email);
    if (user) {
        res.status(400).json({
            status: 400,
            message: 'email taken',
        });
        return;
    }
    const hashedPass = bcrypt.hashSync(req.body.password.trim(), 10);

    const id = parseInt(users.length + 1, 10);
    const newUser = {
        id,
        first_name: req.body.first_name.trim(),
        last_name: req.body.last_name.trim(),
        email: req.body.email.trim(),
        address: req.body.address.trim(),
        is_admin: req.body.is_admin,
        password: hashedPass
    };
    const payload = {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        adress: newUser.adress,
        is_admin: newUser.is_admin,
    };
    const token = jwt.sign(payload, 'secret_key', { expiresIn: '24hrs' });
    users.push(newUser);
    res.status(201).json({
        message: "you signed up successfully!",
        status: 201,
        data: newUser,
        token
    });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            error: 'server'

        })
 }
}
    const signin= (req, res)=>{
    const { error } = checkSignin(req.body);
    if (error) {
        res.status(400).json({
            status: 400,
            error: error.details[0].message
        });
        return;
    };

    try{

        const user = users.find(u => u.email === req.body.email);
        console.log(user);
        
        if (!user) {
            res.status(400).json({
                status: 400,
                error: 'incorrect email or password'
               ,
            });
            return;
        };
       
        const password = bcrypt.compareSync(req.body.password.trim(), user.password);
        if (!password) {
            res.status(400).json({
                status: 400,
                error: 'incorrect email or password'
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
            message:"signed in successfully!",
            status: 200,
            token,
            data: {
                email: user.email
            }
        });
console.log(user.password);
    }catch(error){
        console.log(error)
        }
    }
export {
    signup,
    signin
}