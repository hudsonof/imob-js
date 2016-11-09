angular.module('meusServicos', ['ngResource'])
    .factory('recursoImovel', function($resource) {
        return $resource('/api/imoveis/:imovelId', null, {
            'update' : {
                method: 'PUT'
            }
        });
    })
    .factory('cadastroImoveis', function(recursoImovel, $q) {
        var service = {};

        service.cadastrar = function(imovel) {
            return $q(function(resolve, reject) {
                if (imovel._id) {
                    recursoImovel.update({ imovelId: imovel._id }, imovel, function() {
                        resolve({
                            mensagem: 'Imóvel ' + imovel.titulo + ' atualizado com sucesso',
                            inclusao: false
                        });
                    }, function(error) {
                        console.log(error);
                        reject({
                            mensagem: 'Não foi possível atualizar o imóvel: ' + imovel.titulo
                        });
                    });
                } else {
                    recursoImovel.save(imovel, function() {
                        resolve({
                            mensagem: 'Imóvel ' + imovel.titulo + ' incluído com sucesso.',
                            inclusao: true
                        });
                    }, function(error) {
                        console.log(error);
                        reject({
                            mensagem: 'Não foi possível incluir o imóvel: ' + imovel.titulo
                        });
                    });
                }
            });
        };
        return service;
    });