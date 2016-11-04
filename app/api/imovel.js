var mongoose = require('mongoose');

module.exports = function(app) {
    var api = {};
    var imovelModel = mongoose.model('Imovel');

    api.listar = function(req, res) {
        imovelModel.find({})
            .then(function(imoveis) {
                res.json(imoveis);
            }, function(error) {
                console.log(error);
                res.status(500).json(error);
        });
    };

    api.inserir = function(req, res) {
        
    };

    api.buscarPorId = function(req, res) {
        imovelModel.findById(req.params.id)
            .then(function(imovel) {
                if (!imovel) {
                    throw Error('Imóvel não encontrado.');
                }
                res.json(imovel);
            }, function(error) {
                console.log(error);
                res.status(500).json(error);
        });
    };

    api.removerPorId = function(req, res) {
    
    };

    api.editar = function(req, res) {
    
    };

    return api;
}