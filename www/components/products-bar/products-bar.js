
app.controller("ProductListCtrl", ["getproductsService", "$scope", ProductListCtrl])
function ProductListCtrl(getproductsService, $scope) {
  var vm = this;
  vm.productsarray = [];
  $scope.predicate = 'brand';
  $scope.reverse = true;
  vm.productsarrayresult = [];
  vm.temp = [];
  vm.logProduct = function (productName, $scope) {
    var product = vm.productsarrayresult.find(prod => {
      return prod.name.split(" ")[0] === productName;
    })
    if (product) {
      vm.temp.push(product);
    }
    else {
      alert("Sie haben ein ungültiges Produkt eingegeben");
    }
  }
  getproductsService.getRequest().then(function (res) {
    vm.productsarrayresult = res.data.products;
  }, function errorcallback(response) {
    console.log("Unable to get", Request)
  })
  $scope.order = function (predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };
  getproductsService.getRequest().then(function (res) {
    vm.products = res.data.products;
    }, function errorcallback(response) {
    console.log("Unable to get", Request)
  })
}