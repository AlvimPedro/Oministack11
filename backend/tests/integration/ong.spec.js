const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', 'iddaong') pra setar o header
            .send({
               name: "BATATA",
                email: "contato@contato.com",
                whatsapp: "8888888888",
                city: "ChipsCity",
             uf:"CC"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        });
});