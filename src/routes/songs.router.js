import express from 'express'
import songsController from '../app/controllers/songs.controller.js'
const songsRouter = express.Router()


songsRouter.get('/get/all', songsController.getAllSongs)
export default songsRouter