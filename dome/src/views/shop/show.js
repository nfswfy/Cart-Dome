angular.module('showPage',[])
    .config(function($stateProvider){

        $stateProvider
            .state({
                name:"index.show",
                url:'/show',
                templateUrl:'src/views/shop/show.html',
                controller:'showCtl'
            })
    }).controller('showCtl',function($scope,$state,$stateParams,$http,dataList,cartService){
    // var url = "http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=热销榜";
    // $http.get(url).success(function (json) {
    //     $scope.hot = json.data;
    // })
        $scope.hot = dataList.list;

        $scope.add = function(obj){
            console.log(obj);
            cartService.addPro(obj);
        }
})
    //自定义服务将，获取到的商品存入localStorage中，让cart购物车获取，所选内容
    .service('cartService',function(){
        var cartDatas = [];
        this.addPro = function(obj){
            cartDatas.push(obj);
            console.log(cartDatas)
            localStorage.cartDatas = JSON.stringify(cartDatas);
        }
    })
