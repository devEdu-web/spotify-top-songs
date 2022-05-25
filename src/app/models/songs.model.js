import pool from "../../database/connection";
import {OkPacket, RowDataPacket} from "mysql2";

// (page -1 ) * limit

async function getAllSongs(skip){
    return pool.query<RowDataPacket[]>(`SELECT * FROM top_songs limit 20 offset ${skip}`)
}

export {
    getAllSongs
}