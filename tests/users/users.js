import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server/server';

chai.use(chaiHttp);
chai.should();

describe('signup', () => {
    it('user should be able to signup', (done) =>{
        chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
            first_name: 'Delice',
            last_name: 'Lydia',
            email: 'admin@gmail.com',
            password: '123456',
            address : 'kigali',
            is_admin: true
        })
        .end((err, res) => {
            res.should.have.status(201);
            res.should.be.an('object');
            res.body.should.have.property('status').eql(201);
            res.body.should.have.property('data');
            done();
        })
        })
    });
