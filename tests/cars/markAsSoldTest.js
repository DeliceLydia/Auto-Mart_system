import { describe, it } from 'mocha';
import dotenv from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../../server/server';

dotenv.config();
chai.use(chaiHttp);
chai.should();

describe('Marking the posted car ad as sold', () => {
  it('user should be able to mark a posted car ad as sold', (done) => {
    const user = {
      email: 'lydi@gmail.com',
    };
    const token = jwt.sign(user, 'ingabire123', { expiresIn: '24hrs' });
    const status = {
      status: 'sold',
    };
    chai.request(app)
      .patch('/api/v1/car/2/status')
      .set('Authorization', token)
      .send(status)
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
  });
});
