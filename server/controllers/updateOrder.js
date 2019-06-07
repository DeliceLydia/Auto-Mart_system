import moment from 'moment';
import order from '../models/order';
// import users from '../models/users';
import cars from '../models/cars';
import validateOrder from '../helpers/updateOrder';


const Order= (req, res) => {
    const { error } = validateOrder.validation(req.body);
    if(error){
        res.status(400).json({
            status: 400,
            error: error.details[0].message
            
        });
        return;
        
    }
    
    const orderr = parseInt(req.params.id, 10)
    const orderId = order.findIndex(c => c.id === orderr);
    const originalOrder = order[orderId];
    if (orderId > -1) {
        if(originalOrder.status !== 'pending') {
            res.status(400).json({
                status: 400,
                error: 'sorry, you can not change the price of this order'
            });
            return;
        }

        const newOrder = {
            id: originalOrder.id,
            car_id: originalOrder.car_id,
            created_on: originalOrder.created_on,
            status: originalOrder.status,
            price: originalOrder.price,
            price_offered: req.body.price_offered,
        }
        order[newOrder] = {
            id: originalOrder.id,
            car_id: originalOrder.car_id,
            created_on: originalOrder.created_on,
            status: originalOrder.status,
            price: originalOrder.price,
            price_offered: req.body.price_offered,
        }
      
        res.status(201).json({
          status: 201,
          data: {
            id: originalOrder.id,
            car_id: originalOrder.car_id,
            created_on: moment().format('LL'),
            status: originalOrder.status,
            old_price: originalOrder.price_offered,
            new_price_offered: req.body.new_price_offered,
          },
        });
        return;
    }
     res.status(404).json({
        status: 404,
        error: 'order not found',
      });
    
  }
  
  export default Order;
