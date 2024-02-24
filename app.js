require('dotenv').config()

const Server = require("./src/config/server.js")
const Db = require('./src/config/dbc.js')

const server = new Server()
const db = new Db()

db.startDb();

server.listen()