const Time = require('../models/Time');

module.exports = {
    async create(request, response) {
        const { name, description, logo_url, city } = request.body;

        const newPlayer = await Time.create({
            name,
            description,
            logo_url,
            city,
        });

        
        return response.json('A fazer');
    },
    async read(request, response) {
        return response.json('A fazer');
    },
    async update(request, response) {
        return response.json('A fazer');
    },
    async delete(request, response) {
        return response.json('A fazer');
    },

}