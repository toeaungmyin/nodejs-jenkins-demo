const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return status 200 and a JSON payload', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('ok');
  });
});

describe('GET /health', () => {
  it('should return status 200 with UP status, uptime, and timestamp', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('UP');
    expect(res.body).toHaveProperty('uptime');
    expect(res.body).toHaveProperty('timestamp');
  });
});

