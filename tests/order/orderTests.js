import { describe, it } from 'mocha';
import dotenv from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../../server/server';


dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('Purchasing order', () => {
    it('buyer should be able to make a purchasing order', (done) => {
      const user = {
        email: 'lydi@gmail.com',
      };
      const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '24hrs' });
      const newOrder = {
        car_id: 1,
        amount: 100000,
      };
      chai.request(app)
        .post('/api/v1/order')
        .set('Authorization', token)
        .send(newOrder)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.an('object');
          res.body.should.have.property('status').eql(401);
          res.body.should.have.property('error');
          done();
        });
    });
    it('buyer should not be able to make a purchasing order when he/she is not authorized', (done) => {
      chai.request(app)
        .post('/api/v1/order')
        .end((err, res) => {
          res.should.have.status(401);
          res.should.be.an('object');
          res.body.should.have.property('status').eql(401);
          res.body.should.have.property('error');
          done();
        });
    });
    it('buyer should not be able to make a purchasing order when the car id is not found', (done) => {
      const buyer = {
        email: 'lydi@gmail.com',
      };
      const token = jwt.sign(buyer, process.env.SECRET_KEY, { expiresIn: '24hrs' });
      const newOrder = {
        car_id: 12,
        amount: 20000,
      };
      chai.request(app)
        .post('/api/v1/order')
        .set('Authorization', token)
        .send(newOrder)
        .end((err, res) => {
          res.should.have.status(401);
          res.should.be.an('object');
          res.body.should.have.property('status').eql(401);
          res.body.should.have.property('error');
          done();
        });
    });
    it('buyer should not be able to make a purchasing order when the car id is not found', (done) => {
      const buyer = {
        email: 'lydi@gmail.com',
      };
      const token = jwt.sign(buyer, process.env.SECRET_KEY, { expiresIn: '24hrs' });
      chai.request(app)
        .post('/api/v1/order')
        .set('Authorization', token)
        .send(newOrder)
        .end((err, res) => {
          res.should.have.status(401);
          res.should.be.an('object');
          res.body.should.have.property('status').eql(401);
          res.body.should.have.property('error');
          done();
        });
    });
})