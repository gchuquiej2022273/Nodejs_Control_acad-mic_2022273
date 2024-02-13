const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.conectarDB();
        this.middlewares();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutandoce y escuchado el puerto', this.port);
        });

    }
}

module.exports = server;