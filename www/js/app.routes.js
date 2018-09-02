
app.config(['$qProvider', '$urlRouterProvider', '$stateProvider', '$locationProvider',
function ($qProvider, $urlRouterProvider, $stateProvider, $locationProvider, $rootScope) {
    $urlRouterProvider.otherwise('/home')
    $stateProvider
        .state('home',
            {
                url: "/home",
                templateUrl: "./components/products-bar/products-bar.html",
                controller: "ProductListCtrl as vm"
            }
        )
        
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });
   

}]);
