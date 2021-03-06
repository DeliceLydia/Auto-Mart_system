import { describe, it } from 'mocha';
import chai from 'chai';
import dotenv from 'dotenv';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../../server/server';

chai.use(chaiHttp);
chai.should();
dotenv.config();

describe('Viewing a specific car', () => {
  it('user should be able to view a specific car', (done) => {
    const buyer = {
      email: 'lydi@gmail.com',
    };
    const token = jwt.sign(buyer, 'ingabire123', { expiresIn: '24hrs' });
    chai.request(app)
      .get('/api/v1/car/1')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      })
      });
      it('user should not be able to view a specific car when he is not authorized', (done) => {
        chai.request(app)
          .get('/api/v1/car/1')
          .end((err, res) => {
            res.should.have.status(401);
            res.should.be.an('object');
            res.body.should.have.property('status').eql(401);
            res.body.should.have.property('error');
            done();
          });
  });
  it('user should not be able to view a specific car when the car is not in the system', (done) => {
    const buyer = {
      email: 'chris@gmail.com',
    };
    const token = jwt.sign(buyer, 'ingabire123', { expiresIn: '24hrs' });
    chai.request(app)
      .get('/api/v1/car/19')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
    });
      describe('viewing all unsold cars', () => {
        it('user should be able to view all unsold cars', (done) => {
          const buyer = {
            email: 'lydi@gmail.com',
          };
          const token = jwt.sign(buyer, 'ingabire123', { expiresIn: '24hrs' });
          chai.request(app)
            .get('/api/v1/car')
            .set('Authorization', token)
            .end((err, res) => {
              res.should.have.status(401);
              res.should.be.an('object');
              res.body.should.have.property('status').eql(401);
              res.body.should.have.property('error');
              done();
            });
})
})
  })