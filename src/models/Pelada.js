const mongoose = require('mongoose');

const PeladaSchema = new mongoose.Schema({
    place_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campo',
        required: true,
    },
    place_name: {
        type: mongoose.Schema.Types.String,
        ref: 'Campo',
        required: true
    },
    description: String,
    date: {
        type: Date,
        required: true,
    },
    duration: Number,
    payable: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
        min: 0,
    },
    advices: String,
    privacy: {
        type: String,
        enum: [
            'public', 
            'private'
        ],
        required: true,
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogador'
    }],
});

module.exports = mongoose.model('Pelada', PeladaSchema);