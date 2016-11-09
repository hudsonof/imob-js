angular.module('imobjs').controller('ConfigController', function($scope) {
    
    var listaMenus = [];

    var menus = [{
        _id: 1,
        titulo: 'Home',
        url: '/',
        ativo: true
    }, {
        _id: 2,
        titulo: 'Sobre',
        url: '/sobre',
        ativo: true
    }, {
        _id: 3,
        titulo: 'Imóveis',
        url: '/imoveis',
        ativo: true
    }, {
        _id: 4,
        titulo: 'Financiamento',
        url: '/financiamento',
        ativo: true
    }, {
        _id: 5,
        titulo: 'Corretores',
        url: '/corretores',
        ativo: false
    }, {
        _id: 6,
        titulo: 'Contato',
        url: '/contato',
        ativo: true
    }];

    menus.forEach(function(menu) {
        if (menu.ativo) {
            listaMenus.push(menu);
        }
    });

    $scope.listaMenus = listaMenus;
    $scope.title = 'Residenc Imóveis';

});