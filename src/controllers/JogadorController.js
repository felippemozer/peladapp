const Jogador = require('../models/Jogador');

module.exports = {
    async create(request, response) {
        const { filename } = request.file;
        const { name, age, phone, positions } = request.body;

        const positionsArray = positions.split(',').map(position => position.trim());

        const phoneExists = await Jogador.findOne({ phone });

        if(!phoneExists) {
            const newPlayer = await Jogador.create({
                name,
                age,
                phone,
                positions: positionsArray,
                avatar_url: filename
            });

            return response.json(newPlayer);
        }
        
        return response.json('Não foi possível realizar o cadastro');
    },

    async read(request, response) {
        const players = await Jogador.find();

        return response.json(players);
    },

    async update(request, response) {
        const auth = request.headers.authorization;
        const { id } = request.params;

        if(auth !== id) {
            return response.json('Não foi possível alterar os dados');
        }

        const { name, phone, positions } = request.body;

        const phoneExists = await Jogador.findOne({ phone });

        if(!phoneExists) {
            await Jogador.updateOne({ _id: auth }, { name, phone, avatar_url, $push: { positions }});

            return response.json('Dados alterados com sucesso');
        }

        return response.json('Este número de telefone já está cadastrado');
    },

    async delete(request, response) {
        const auth = request.headers.authorization;
        const { id } = request.params;
        const { name } = await Jogador.findById(id);

        if(auth !== id) {
            return response.json(`Não foi possível excluir o jogador ${name}.`);
        }

        await Jogador.deleteOne({
            _id: id
        });

        return response.json(`Jogador ${name} excluído com sucesso`);
    }
};