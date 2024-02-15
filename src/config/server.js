const express = require('express');//asi se llama un archivo de dependencia
const cors = require('cors');
const path = require('path');


class server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.pre = "/api";
        this.paths = {
            users: this.pre + "/users",
          };
        this.routes();
        this.middlewares();
    }

    middlewares() {
        //this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("/src/public"));
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

    /*constructor(){
        this.app = express()
        this.port= process.env.PORT;

        this.pre = "/api";
        this.paths = {
            users: this.pre + '/users'
        };
        //middlewares
        this.middlewares()
        //routes
        this.routes();

    }
    middlewares(){
        //es parte de la seguridad
        this.app.use(cors())
        //cualquier informacion que venga vendra serializar a json
        this.app.use(express.json())
        //directorio publico
        this.app.use(express.static('public'));
        //hola
    }

    listen() {
        //const port=3000;
        //primer argumento es el puerto, el segundo es una funcion
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto","localhost:"+this.port)
        })
    }
    routes(){
        this.app.use(this.paths.users,require('../routes/user.route'));
    }
}


module.exports={
    Serve*/