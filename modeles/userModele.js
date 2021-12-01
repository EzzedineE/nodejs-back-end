const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: false, }

}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('User', userSchema);