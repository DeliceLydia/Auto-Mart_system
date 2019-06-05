import validatePost from '../helpers/postAD';
import Ads from '../models/Ads';

const post= (req, res) => {
    const { error } = validatePost.validation(req.body);
    if(error){
        res.status(400).json({
            status: 400,
            error: error.details[0].message
            
        });
        return;
        
    }
    
    
    const id = parseInt(Ads.length + 1);
    const car = {
        id,
        email: req.body.email,
        created_on: req.body.created_on,
        manufacturer: req.body.manufacture,
        model: req.body.model,
        price: req.body.price,
        state: req.body.state,
        status: req.body.status

    }
       Ads.push(car);
       res.status(201).json({
        status: 201,
        data: car
    });

}
    export default post;

