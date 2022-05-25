import pool from "../../database/connection.js";

// (page -1 ) * limit

async function getAllSongs(skip){
    return pool.query(`SELECT * FROM top_songs limit 20 offset ?`, [Number(skip)])
}

export {
    getAllSongs
}