import express from 'express';
import songsController from '../app/controllers/songs.controller.js';
const songsRouter = express.Router();

songsRouter.get('/get/all', songsController.getAllSongsHandler);
songsRouter.get('/get/genre', songsController.getByGenreHandler);
songsRouter.get('/get/year_released', songsController.getByYearReleasedHandler);
export default songsRouter;
