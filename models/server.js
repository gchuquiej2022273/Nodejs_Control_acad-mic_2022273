const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.alumnoPath = '/api/usuarios';
        this.authPath = '/api/auth';
        this.coursePath = '/api/cursos'
        this.joinPath = '/api/join'

        this.conectarDB();
        this.middlewares();
        this.routers();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routers() {
        this.app.use(this.joinPath, require('../routers/join.routes'))
        this.app.use(this.coursePath, require('../routers/curso.routes'));
        this.app.use(this.authPath , require('../routers/login.routes'));
        this.app.use(this.alumnoPath, require('../routers/user.routes'));
    } 

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutandoce y escuchado el puerto', this.port);
        });
    }
}

module.exports = server;