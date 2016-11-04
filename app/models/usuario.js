var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
    usuario: { type: String, required: true },
    senha: { type: String, required: true }
});

mongoose.model('Usuario', usuarioSchema);