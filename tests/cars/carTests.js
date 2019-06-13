import { describe, it } from 'mocha';
import chai from 'chai';
import dotenv from 'dotenv';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../../server/server';

chai.use(chaiHttp);
chai.should();
dotenv.config();

describe('Post a car a sale ad', () => {
  it('user should be able to post a car sale ad', (done) => {
    const user = {
      email: 'lydi@gmail.com',
    };
    const token = jwt.sign(user, 'ingabire123', { expiresIn: '24hrs' });
    const carAd = {
      email: 'lydi@gmail.com',
      manufacturer: 'benz',
      model: '2019 benz',
      price: 90000,
      state: 'new',
      status: 'available',
    };
    chai.request(app)
      .post('/api/v1/car')
      .set('Authorization', token)
      .send(carAd)
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
  });
  it('user should not be able to post a car sale ad when he/she is not authorized', (done) => {
    chai.request(app)
      .post('/api/v1/car')
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
    })
    it('user should not be able to post a car sale ad when he/she is not in the system', (done) => {
        const user = {
          email: 'hhgygfy@gmail.com',
        };
        const token = jwt.sign(user, 'ingabire123', { expiresIn: '24hrs' });
        const carAd = {
          email: 'fadskh@gmail.com',
          manufacturer: 'benz',
          model: '2019 benz',
          price: 60000,
          state: 'new',
          status: 'available',
        };
        chai.request(app)
          .post('/api/v1/car')
          .set('Authorization', token)
          .send(carAd)
          .end((err, res) => {
            res.should.have.status(401);
            res.should.be.an('object');
            res.body.should.have.property('status').eql(401);
            res.body.should.have.property('error');
            done();

        })
    })
    it('user should not be able to post a car sale ad when there is a missing info', (done) => {
        const user = {
          email: 'lydi@gmail.com',
        };
        const token = jwt.sign(user, 'ingabire123', { expiresIn: '24hrs' });
        chai.request(app)
          .post('/api/v1/car')
          .set('Authorization', token)
          .end((err, res) => {
            res.should.have.status(401);
            res.should.be.an('object');
            res.body.should.have.property('status').eql(401);
            res.body.should.have.property('error');
            done();
          });
      });
      it('user should not be able to post a car sale ad when he/she puts an invalid token', (done) => {
        const user = {
          email: 'lydi@gmail.com',
        };
        const token = jwt.sign(user, 'SECRET', { expiresIn: '24hrs' });
        chai.request(app)
          .post('/api/v1/car')
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