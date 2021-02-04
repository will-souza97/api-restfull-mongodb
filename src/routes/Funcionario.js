const { Router } = require('express');
const FuncionarioController = require('../app/controllers/FuncionarioController');

const Funcionario = new Router();

Funcionario.get('/funcionario', FuncionarioController.index);
Funcionario.get('/funcionario/:id', FuncionarioController.show);
Funcionario.post('/funcionario', FuncionarioController.store);
Funcionario.put('/funcionario/:id', FuncionarioController.update);
Funcionario.delete('/funcionario/:id', FuncionarioController.delete);

module.exports = Funcionario;
