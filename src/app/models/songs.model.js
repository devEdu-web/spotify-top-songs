import pool from '../../database/connection.js';

// (page -1 ) * limit

class songsModel {
  async getAllSongs(skip) {
    return pool.query(`SELECT * FROM top_songs limit 20 offset ?`, [
      Math.abs(skip),
    ]);
  }
  async getByGenre(skip, genre) {
    return pool.query(
      'SELECT * FROM `top_songs` WHERE `top_genre` = ? limit 20 offset ?',
      [genre, Math.abs(skip)]
    );
  }

  async getByYearReleased(skip, year) {
    return pool.query(
      'SELECT * FROM `top_songs` WHERE `year_released` = ? limit 20 offset ?',
      [Math.abs(year), Math.abs(skip)]
    );
  }

  async getByArtist(skip, artist) {
    return pool.query(
      'SELECT * FROM `top_songs` WHERE `artist` = ? limit 20 offset ?',
      [artist, Math.abs(skip)]
    );
  }

  async getByArtistType(skip, artist_type) {
    return pool.query(
      'SELECT * FROM `top_songs` WHERE `artist_type` = ? limit 20 offset ?',
      [artist_type, Math.abs(skip)]
    );
  }

  async getByDanceability(skip) {
    return pool.query(
      'SELECT * FROM `top_songs` ORDER BY dnce DESC limit 20 offset ?',
      [Math.abs(skip)]
    );
  }
  async getByEnergy(skip) {
    return pool.query(
      'SELECT * FROM `top_songs` ORDER by nrgy DESC limit 20 offset ?',
      [Math.abs(skip)]
    );
  }
}

export default new songsModel();
