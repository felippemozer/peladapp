const mongoose = require('mongoose');

const TimesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    players: [String],
    standings: {
        wins:  Number,
        draws: Number,
        loses: Number,
    },
    logo_url: String,
    city: String,
    creator: String, // Criador do time
    captain: String, // Admin do time
});

module.exports = mongoose.model('Time', TimesSchema);