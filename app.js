//app.js es el punto de entrada de la aplicación node.js
/*const express = require('express');
const app = express();*/
require('dotenv').config()

const Server = require("./src/config/server.js")

const server = new Server()

server.listen()

/*const start = () => {
  app.use(express.static("./src/public"));
  app.listen(3000);
}

start(); */

/*require('./loaders/network-information.js');
require('./api-routes/home.js')(app);
var config = require('./src/config/config.js');

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
})*/