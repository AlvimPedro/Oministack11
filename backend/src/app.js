const express = require('express'); //Importando o modulo express pra dentro da variavel express
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes'); //Importando 

const app = express(); //Uma variavel q vai armazenar a aplicação

app.use(cors());
app.use(express.json()); //falando q nas requisiçoes vai transformar a requisição em json em objeto
app.use(routes);
app.use(errors());

module.exports = app;