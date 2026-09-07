const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return status 200 and a JSON payload', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('ok');
  });
});
