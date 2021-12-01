const mongoose = require('mongoose');

const sondageSchema = mongoose.Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    oui: { type: Number, default: 0 },
    non: { type: Number, default: 0 },


}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('sondage', sondageSchema);