const express = require('express');
const cors = require('cors');

const Funcionario = require('./routes/Funcionario');

const routes = [Funcionario];

require('./database');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    routes.map((route) => this.server.use(route));
  }
}

module.exports = new App().server;
