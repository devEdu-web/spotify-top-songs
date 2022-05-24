import express from 'express';

class App {
    public express
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
  
    }

}
export default new App().express