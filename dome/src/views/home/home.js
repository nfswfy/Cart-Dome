angular.module('homePage',[])
.config(function($stateProvider){

  $stateProvider
  .state({
    name:"index.home",
    url:'/home',
    templateUrl:'src/views/home/home.html',
    controller:'homeCtl'
  })
}).controller('homeCtl',function($scope,$state,$stateParams){
  var mySwiper = new Swiper ('.swiper-container', {
    autoplay :2000,
    loop: true,
    pagination: '.swiper-pagination',
    observer:true,
    observeParents:true
  })
})

