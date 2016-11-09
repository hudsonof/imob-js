var mongoose = require('mongoose');

var imovelSchema = mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, default: '' },
    codigo: { type: String, required: true },
    valor: { type: Number, min: 0, required: true },
    imagem_principal: { type: String, default: '' },
    data_cadastro: { type: Date, default:  Date.now },
    proprietario: {
        nome: { type: String, required: true },
        telefone: { type: Number, required: true }
    }
});

mongoose.model('Imovel', imovelSchema);