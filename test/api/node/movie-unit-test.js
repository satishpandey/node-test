const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../server.js');

describe('Insert /movies', () => {

    it('OK, inserting movies data', (done) => {

        request(app).post('api/movie/create').send({
            "name": "Sholey",
            "description": "Drama",
            "releasingDate": "02/02/2020",
            "Genre": {
                "name": "Action",
                "description": "comedy"
            },
            "duration": 3,
            "rating": 5
        }).then((res) => {
            const body = res.body;
            expect(body).to.contain.property('message');
            done();
        }).catch(done);
    });

});

describe('Show /Show movies details', () => {
    it('OK, show the data ', (done) => {
        request(app).get('api/movie/get').expect(200).
            then((res) => {
                const body = res.body;
                expect(body).to.contain.property('_id');
                done();
            }).catch(done);
    });
});

describe('Delete,  /Delete the data ', () => {
    it('OK, Deleted ', (done) => {
        request(app).get('api/movie/delete' + '5fc222b74403096b34a22af9').expect(200).
            then((res) => {
                const body = res.body;
                expect(body).to.contain.property('message');
                done();
            }).catch(done);
    });
});