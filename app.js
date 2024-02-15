require('dotenv').config()

const Server = require("./src/config/server.js")

const server = new Server()

server.listen()