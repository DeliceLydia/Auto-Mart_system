/* eslint-disable linebreak-style */
const order = [];

const order1 = {
  id: 1,
  car_id: 1,
  created_on: '01/06/2019',
  status: 'pending',
  price: 100000,
  price_offered: 80000,
};
const order2 = {
  id: 2,
  car_id: 2,
  created_on: '01/05/2019',
  status: 'pending',
  price: 1000000,
  price_offered: 800000,
};
order.push(order1, order2);

export default order;
