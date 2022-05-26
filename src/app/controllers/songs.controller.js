import songsModel from '../models/songs.model.js';
import getPagination from '../../helper/pagination.js';

class SongsController {
  async getAllSongsHandler(req, res) {
    const page = req.query.page || 1;
    const skip = getPagination(page);
    const result = await songsModel.getAllSongs(skip);
    return res.status(200).json({
      page: page,
      totalResults: result[0].length,
      results: result[0],
    });
  }

  async getByGenreHandler(req, res) {
    const page = req.query.page || 1;
    const genre = req.query.genre;
    const skip = getPagination(page);
    if (!genre)
      return res.status(400).json({
        page: page,
        totalResults: 0,
        results: [],
      });
    const result = await songsModel.getByGenre(skip, genre);
    return res.status(200).json({
      page: page,
      totalResults: result[0].length,
      results: result[0],
    });
  }

  async getByYearReleasedHandler(req, res) {
    const page = req.query.page || 1;
    const year = req.query.year;
    const skip = getPagination(page);
    if (!year)
      return res.status(400).json({
        page: page,
        totalResults: 0,
        results: [],
      });

    const result = await songsModel.getByYearReleased(skip, year);
    return res.status(200).json({
      page: page,
      totalResults: result[0].length,
      results: result[0],
    });
  }
}
export default new SongsController();
