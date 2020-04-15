const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const CampoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surface: {
        type: String,
        required: true,
    },
    description: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    },
});

module.exports = mongoose.model('Campo', CampoSchema);