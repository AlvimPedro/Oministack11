const express = require('express'); //Importando o modulo express pra dentro da variavel express

const app = express(); //Uma variavel q vai armazenar a aplicação

app.listen(3333); //Acessar a aplicação pelo locahost:3333

app.get('/', (request,response) => {
    //return response.send('Hello Covid-19');
    return response.json({
        evento: 'Seman Quarentena Oministack',
        aluno: 'Alvim'
    });
})