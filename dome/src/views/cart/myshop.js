angular.module('cartPage',['ServiceModule'])
    .config(function($stateProvider){

        $stateProvider
            .state({
                name:"index.cart",
                url:'/cart',
                templateUrl:'src/views/cart/myshop.html',
                controller:'cartCtl'
            })
    }).controller('cartCtl',function($scope){
        var datas = localStorage.cartDatas;
        $scope.arr3 = JSON.parse(datas);


        $scope.allPrices = function () {
            $scope.allprice = 0;
            return $scope.allprice;
        };



})

