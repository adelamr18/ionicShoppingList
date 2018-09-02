app.factory("getproductsService", function ($http) {
    return {
        getRequest: function () {
            return $http({
                method: 'get',
                // url: 'http://localhost:3000/api/products'
                url:' https://www.bringmeister.de/api/products?limit=60&offset=0&q=milk'
            });
        },
    }
})


