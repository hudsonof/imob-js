module.exports = function(app) {
    var imovelApi = app.api.imovel;

    app.route('/api/')
        .get(imovelApi.listar);
}
