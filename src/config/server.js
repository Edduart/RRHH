const express = require('express');
//const bodyParser = require('body-parser')
const db = require("./db.js")
const cors = require('cors');
//const path = require('path');


class server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.pre = "/api";
        this.paths = {
            users: this.pre + "/users",
            contratos: this.pre + "/contratos",
            asistencia: this.pre + "/asistencia",
            nomina: this.pre + "/nomina",
            detalle: this.pre + "/detalle",
            concepto: this.pre + "/concepto"
          };
        this.routes();
        this.startDb();
    }

    // inicia la conexion a la DB

    startDb() {
        db.authenticate().then(() => {
            console.log('conexion a la base de datos exitosa!')
        }).catch((err) => {
            console.log('error en la coneccion a la base de datos')
        });
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json());
        this.app.use(express.static("./src/public"));
    }

    // inicia el servidor a espera por HTTP request

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
        this.app.use(this.paths.contratos, require("../routes/contrato.routes.js"));
        this.app.use(this.paths.asistencia, require("../routes/asistencia.routes.js"));
        this.app.use(this.paths.nomina, require("../routes/nomina.routes.js"));
        this.app.use(this.paths.detalle, require("../routes/detalle.routes.js"));
        this.app.use(this.paths.concepto, require("../routes/concepto.routes.js"));
    }
}

module.exports = server;