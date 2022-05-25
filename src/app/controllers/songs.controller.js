import { getAllSongs } from "../models/songs.model.js";
import getPagination from "../../helper/pagination.js";

class SongsController {
    async getAllSongs(req, res) {
        const page = req.query.page || 1
        const skip = getPagination(page)
        const result = await getAllSongs(skip)
        return res.status(200).json(result[0])
    }
}

export default new SongsController()