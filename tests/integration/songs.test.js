import request from 'supertest';
import App from '../../src/app.js';

describe('Songs', () => {
  describe('Pagination', () => {
    it('Should return the first page with 20 elements', (done) => {
      request(App)
        .get('/api/get/all')
        .then((response) => {
          expect(response.body.results.length).toBe(20);
          expect(response.body.results[0].id).toBe(1);
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
          expect(response.body.results.length).toBe(20);
          expect(response.body.results[0].id).toBe(21);
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });
  describe('Songs controller', () => {
    it('Should return the songs of the genre specified', (done) => {
      const genre = 'pop'
      request(App)
        .get(`/api/get/genre?genre=${genre}`)
        .then(response => {
          response.body.results.forEach(song => {
            expect(song['top_genre']).toBe(genre)
          })
          done()
        })
        .catch(error => done(error))
    })
  })
});
