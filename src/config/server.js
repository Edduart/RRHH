const express = require('express');//asi se llama un archivo de dependencia
const db = require("../config/dbc.js")
const cors = require('cors');
const path = require('path');


class server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.pre = "/api";
        this.paths = {
            users: this.pre + "/users",
          };
        this.routes();
        this.startDb();
    }

    startDb() {
        db.authenticate().then(() => {
            console.log('conexion a la base de datos exitosa!')
        }).catch((err) => {
            console.log('error en la coneccion a la base de datos')
        });
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("./src/public"));
    }

    listen = () => {
        this.app.listen(this.port, () => {
          console.log("Servidor corriendo en puerto", "localhost:" + this.port);
        });
    }

    routes = () => {

        this.app.use((req, res, next) => {
            console.log(`START => [${new Date().toLocaleString()}] ${req.method} ${req.url}, => END`);
            next();
        });
        
        this.app.use(this.paths.users, require("../routes/user.routes"));
    }
}

module.exports = server;