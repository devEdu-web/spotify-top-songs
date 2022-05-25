import pool from "../../database/connection.js";

// (page -1 ) * limit

class songsModel{
    async getAllSongs(skip){
        return pool.query(`SELECT * FROM top_songs limit 20 offset ?`, [Math.abs(skip)])
    }

    async getByGenre(skip, genre) {
        return pool.query('SELECT * FROM `top_songs` WHERE `top_genre` = ? limit 20 offset ?', [genre, Math.abs(skip)])
    }

}


export default new songsModel()