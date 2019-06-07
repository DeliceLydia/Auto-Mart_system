/* eslint-disable linebreak-style */
const cars = [];

const car1 = {
  id: 1,
  owner: 1,
  created_on: '01/05/2019',
  state: 'new',
  status: 'available',
  price: 100000,
  manufacturer: 'ford',
  model: 'ford 2019',
  body_type: 'car',

};
const car2 = {
  id: 2,
  owner: 2,
  created_on: '01/06/2019',
  state: 'used',
  status: 'available',
  price: 200000,
  manufacturer: 'nissan',
  model: 'nissan 2019',
  body_type: 'car',
};
const car3 = {
  id: 3,
  owner: 3,
  created_on: '10/06/2018',
  state: 'used',
  status: 'available',
  price: 100000,
  manufucturer: 'Benz',
  model: 'mercedes benz 2019',
  body_type: 'car',
};

cars.push(car1, car2, car3);
export default cars;
