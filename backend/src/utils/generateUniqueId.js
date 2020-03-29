const crypto = require('crypto');//um modulo para a criação do id da ong, para gerar um id aleatorio

module.exports =  function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}