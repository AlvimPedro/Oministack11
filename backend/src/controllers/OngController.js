const connection = require('../database/connection')
const crypto = require('crypto');//um modulo para a criação do id da ong, para gerar um id aleatorio

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body; //destrinchando os dados que receber para cada um ficar em uma variavel

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        return response.json({ id });
    }
};