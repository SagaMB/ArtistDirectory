var art = angular.module("art",['ngRoute', 'myControllers']);

art.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'search.html',
        controller:'SearchController'
    })
    .when('/details/:itemId', {
        templateUrl: 'details.html',
        controller: 'DetailsController'
      });
}]);