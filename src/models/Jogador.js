const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const JogadorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 11,
    },
    location: {
        type: PointSchema,
        index: '2dsphere'
    },
    positions: [{
        type: String,
        enum: [
            'Goleiro',
            'Lateral esquerdo',
            'Lateral direito',
            'Zagueiro',
            'Volante',
            'Meio-campo',
            'Atacante',
            'Fixo',
            'Ala esquerda',
            'Ala direita',
            'Pivô'
        ],
        required: true
    }],
    teams: [String],
    avatar_url: String
});

module.exports = mongoose.model('Jogador', JogadorSchema);