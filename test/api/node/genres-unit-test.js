const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../server.js');


describe('Insert /genres', () => {

    it('OK, inserting movies data', (done) => {
        request(app).post('api/genres/create').send({

                "name": "Action",
                "description": "comedy"

        }).then((res) => {
            const body = res.body;
            expect(body).to.contain.property('message');
            done();
        }).catch(done);
    });

});

describe('Show /Show Genres details', () => {
    it('OK, show the data ', (done) => {
        request(app).get('api/genres/get').expect(200).
            then((res) => {
                const body = res.body;
                expect(body).to.contain.property('_id');
                done();
            }).catch(done);
    });
});

describe('Delete,  /Delete genres data ', () => {
    it('OK, Deleted ', (done) => {
        request(app).get('api/genres/delete/' + '5fc26e8140d22b0003dd1b13').expect(200).
            then((res) => {
                const body = res.body;
                expect(body).to.contain.property('message');
                done();
            }).catch(done);
    });
});