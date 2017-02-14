/**
 * Created by dell on 2017/2/13.
 */
angular.module('myApp',
    ["ui.router",
        "homePage",
        "cartPage",
        "showPage",
        "footerPage",
        // "DirectiveModule",
        "ServiceModule"

    ])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/index/home')
        $stateProvider
            .state({
                name:'index',
                url:'/index',
                //css:'style.css',
                templateUrl:'src/views/footer/footer.html'
                // controller:"indexCtl"
            })
    })