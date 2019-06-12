import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server/server';

chai.use(chaiHttp);
chai.should();

describe('signup', () => {
    it('user should be able to signup', (done) =>{
       const user={

            first_name: 'Delice',
            last_name: 'Lydia',
            email: 'admin@gmail.com',
            password: '123456',
            address : 'kigali',
            is_admin: true
        };
        chai.request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
            res.should.have.status(201);
            res.should.be.an('object');
            res.body.should.have.property('status').eql(201);
            res.body.should.have.property('data');
            done();
        });
    });
    it('user should not be able to signup when there is incorrect data type', (done) =>{
        const user={

            first_name: 'Delice',
            last_name: 'Lydia',
            email: 'admin@gmail.com',
            password: '123456',
            address : 'kigali',
            is_admin: true
        };
        chai.request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
            res.should.have.status(400);
            res.should.be.an('object');
            res.body.should.have.property('status').eql(400);
            res.body.should.have.property('data');
            done();
        });
    })
});
