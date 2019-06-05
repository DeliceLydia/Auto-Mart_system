import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if(!header || header === '') {
            res.status(401).json({
                status: 401,
                error: 'Unauthorized'
            });
            return;
        };
        const token = jwt.verify(header, 'secret_key');
        req.user = token;
        next();
    } catch (error) {
        res.status(401).json({
            status: 401,
            error: 'Invalid token'
        });
        return;
    }
};
export default auth;
