
var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  xit('respond with hello world', function(done) {
    request(app).get('/').expect('hello world', done);
  });
});
