const Campo = require('../models/Campo');

module.exports = {
    async create(request, response){
        const { name, surface, description } = request.body;

        const newField = await Campo.create({
            name, 
            surface,
            description
        });

        return response.json(newField);
    },
    
    async read(request, response){
        const fields = await Campo.find();

        return response.json(fields);
    },

    async update(request, response){
        return response.json('A fazer');
    },

    async delete(request, response){
        return response.json('A fazer');
    }
}