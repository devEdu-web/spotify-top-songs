import { parse } from 'csv-parse';
import fs from 'node:fs';
import pool from './connection.js';

async function insertSongs(
  title,
  artist,
  top_genre,
  year_released,
  added,
  bpm,
  nrgy,
  dnce,
  dB,
  live,
  val,
  dur,
  acous,
  spch,
  pop,
  top_year,
  artist_type
) {
  const result = await pool.query(
    `INSERT INTO top_songs (
    title,
    artist,
    top_genre,
    year_released,
    added,
    bpm,
    nrgy,
    dnce,
    dB,
    live,
    val,
    dur,
    acous,
    spch,
    pop,
    top_year,
    artist_type
    ) VALUES (
      ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?  
    );`,
    [
      title,
      artist,
      top_genre,
      year_released,
      added,
      bpm,
      nrgy,
      dnce,
      dB,
      live,
      val,
      dur,
      acous,
      spch,
      pop,
      top_year,
      artist_type,
    ]
  );
  console.log(result);
}

async function createTopSongsTable() {
  await pool.query(`CREATE TABLE if not exists top_songs (
    id int not null primary key auto_increment,
    title varchar(128) not null,
    artist varchar(128) not null,
    top_genre varchar(128) not null,
    year_released int not null,
    added varchar(128) not null,
    bpm int not null,
    nrgy int not null,
    dnce int not null,
    dB int not null,
    live int not null,
    val int not null,
    dur int not null,
    acous int not null,
    spch int not null,
    pop int not null,
    top_year int not null,
    artist_type varchar(128) not null default ''
  );`);
  console.log('Done');
  pool.end();
}

fs.createReadStream('../../spotify-data/spotify.csv')
  .pipe(
    parse({
      columns: true,
      bom: true,
    })
  )
  .on('error', (error) => {
    console.log(error);
  })
  .on('data', async (chunk) => {
    // console.log(chunk['artist type'])
    await insertSongs(
      chunk.title,
      chunk.artist,
      chunk['top genre'],
      Number(chunk['year released']),
      chunk.added,
      Number(chunk.bpm),
      Number(chunk.nrgy),
      Number(chunk.dnce),
      Number(chunk.dB),
      Number(chunk.live),
      Number(chunk.val),
      Number(chunk.dur),
      Number(chunk.acous),
      Number(chunk.spch),
      Number(chunk.pop),
      Number(chunk['top year']),
      chunk['artist type']
    );
  })
  .on('end', () => {
    console.log('finished');
  });
