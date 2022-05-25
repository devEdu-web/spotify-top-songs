import express from 'express';
import songsRouter from "./routes/songs.router.js";
class App {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.urlencoded({extended: true}));
        this.express.use(express.json());
    }

    routes() {
        this.express.use('/api', songsRouter)
    }

}
export default new App().express