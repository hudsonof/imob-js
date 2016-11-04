module.exports = function(app) {
    var imovelApi = app.api.imovel;

    app.route('/api/imoveis')
        .get(imovelApi.listar)
        .post(imovelApi.inserir);

    app.route('/api/imoveis/:id')
        .get(imovelApi.buscarPorId)
        .delete(imovelApi.removerPorId)
        .put(imovelApi.editar);
}
