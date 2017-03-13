let routes = function ($stateProvider, $urlRouterProvider,$locationProvider,localStorageServiceProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'client/modules/home/home.html'
        });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    localStorageServiceProvider.setPrefix('vendor');
};

routes.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider','localStorageServiceProvider'];
export default routes;