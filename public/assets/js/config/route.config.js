angular.module('imobjs').config(config);

function config($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .when('/imoveis', {
            templateUrl: 'partials/imoveis.html',
            controller: 'ImovelController',
            controllerAs: 'vm'
        })
        .when('/admin/login', {
            templateUrl: 'partials/admin/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .when('/admin', {
            templateUrl: 'partials/admin/home.html',
            controller: 'AdminController',
            controllerAs: 'vm'
        })
        .when('/404', {
            templateUrl: 'partials/404.html'
        })
        .otherwise({ redirect: '/404' });

}