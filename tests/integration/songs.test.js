import request from 'supertest';
import App from '../../src/app.js';
import qs from 'querystring';

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
      const genre = 'pop';
      const query = qs.stringify({ genre });
      request(App)
        .get(`/api/get/genre?${query}`)
        .then((response) => {
          response.body.results.forEach((song) => {
            expect(song['top_genre']).toBe(genre);
          });
          done();
        })
        .catch((error) => done(error));
    });
    it('Should return the songs released on the specified year', (done) => {
      const year = 2012;
      const query = qs.stringify({ year });
      request(App)
        .get(`/api/get/year_released?${query}`)
        .then((response) => {
          response.body.results.forEach((song) => {
            expect(song['year_released']).toBe(year);
          });
          done();
        })
        .catch((error) => done(error));
    });
    it('Should return the songs of the specified artist', (done) => {
      const artist = 'Sean Kingston';
      const query = qs.stringify({ artist });
      request(App)
        .get(`/api/get/artist?${query}`)
        .then((response) => {
          response.body.results.forEach((song) => {
            expect(song.artist).toBe(artist);
          });
          done();
        })
        .catch((error) => done(error));
    });
  });
});
