import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server/server';

chai.use(chaiHttp);
chai.should();

describe('signup', () => {
    it('user should be able to signup', (done) =>{
       const user={
            "first_name": "777777",
            "last_name": "parfaite",
            "email": "lydi@gmail.com",
            "password": "124hfjjf",
            "address": "remera"
        };
        chai.request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.have.property('data');
            done();
        });
    });
    it('user should not be able to signup when there is incorrect data type', (done) =>{
        const user={

            first_name: '565656',
            last_name: 'Lydia',
            email: '@gmail',
            password: '123456',
            address : 'kigali',
            is_admin: true
        };
        chai.request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
            res.should.have.status(400);
            done();
        });
    })
});
it('user should not be able to signup when there is no email', (done) =>{
    const user={

        first_name: '565656',
        last_name: 'Lydia',
        email: 'hduhduiewhud',
        password: '123456',
        address : 'kigali',
        is_admin: true
    };
    chai.request(app)
    .post('/api/v1/auth/signup')
    .send(user)
    .end((err, res) => {
        res.should.have.status(400);
        done();
    });
})
it('user should not be able to signup when there is an empty field', (done) =>{
    const user={

        first_name: '565656',
        last_name: 'Lydia',
        email: '',
        password: '123456',
        address : 'kigali',
        is_admin: true
    };
    chai.request(app)
    .post('/api/v1/auth/signup')
    .send(user)
    .end((err, res) => {
        res.should.have.status(400);
        done();
    });
})
