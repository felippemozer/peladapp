const Campo = require('../models/Campo');
const Pelada = require('../models/Pelada');
const string2day = require('./utils/parseStringToDay');
const verifyPlayers = require('./utils/verifyPlayers');
const verifyAuth = require('./utils/verifyAuthorization');

module.exports = {
    async create(request, response) {
        const data = request.body;
        let { price } = request.body;

        if(data.payable === false) {
            price = 0;
        }
        
        const fullDate = string2day(data.day, data.time);

        const playersID = verifyPlayers(data.players);

        const campoExists = await Campo.findOne({ name: data.place });

        if(campoExists) {
            const newGame = await Pelada.create({
                place_id: campoExists._id,
                place_name: data.place,
                description: data.description,
                date: fullDate,
                duration: data.duration,
                payable: data.payable,
                advices: data.advices,
                privacy: data.privacy,
                players: playersID,
                price
            });

            return response.json(newGame);
        }

        return response.json('Não foi possível realizar o cadastro');
    },

    async read(request, response) {
        const games = await Pelada.find();

        return response.json(games);
    },

    async update(request, response) {
        return response.json('Não foi possível alterar o jogo.');
    },

    async delete(request, response) {
        if(verifyAuth(request)) {
            const { place_id, place_name } = await Pelada.findById(id);
            if(place_id) {
                await Pelada.deleteOne({
                    _id: id
                });
                
                return response.json(`O jogo marcado no ${place_name} foi excluído com sucesso`);
            }
        }
        
        return response.json(`Não foi possível excluir o jogo.`);
    },

    async deleteAll(request, response) {
        await Pelada.deleteMany();

        return response.json('Ok');
    }
};