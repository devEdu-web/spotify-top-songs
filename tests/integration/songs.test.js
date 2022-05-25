import request from 'supertest';
import App from '../../src/app.js';

describe('Songs', () => {
  describe('Pagination', () => {
    it('Should return the first page with 20 elements', (done) => {
      request(App)
        .get('/api/get/all')
        .then((response) => {
          expect(response.body.length).toBe(20);
          expect(response.body[0].id).toBe(1);
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
    it('Should return the second page with 20 elements', (done) => {
      request(App)
        .get('/api/get/all?page=2')
        .then((response) => {
          expect(response.body.length).toBe(20);
          expect(response.body[0].id).toBe(21);
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });
});
