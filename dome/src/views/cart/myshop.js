angular.module('cartPage',['ServiceModule'])
    .config(function($stateProvider){

        $stateProvider
            .state({
                name:"index.cart",
                url:'/cart',
                templateUrl:'src/views/cart/myshop.html',
                controller:'cartCtl'
            })
    }).controller('cartCtl',function($scope,dataList){
        var datas =JSON.parse(localStorage.cartDatas);
        $scope.arr3 = datas;



})

