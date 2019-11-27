
var request = require('supertest');
var app = require('../app.js');
 
describe('GET /dinh', function() {
  it('respond with Dinh Dinh', function(done) {
    request(app).get('/dinh').expect('hello Dinh Dinh', done);
  });
});

describe('GET /tuan', function() {
  it('respond with Hoang Tuan', function(done) {
    request(app).get('/tuan').expect('hello Hoang Tuan', done);
  });
});

describe('GET /thang', function() {
  it('respond with Long Thang', function(done) {
    request(app).get('/thang').expect('hello Long Thang', done);
  });
});
