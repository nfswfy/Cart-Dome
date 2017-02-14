angular.module('DirectiveModule',[])
.directive('myAdds', function (dataList) {
    return{
      restrict: 'EA',
      link:function (scope,element) {

        element.on("click",function () {
          console.log(element);
          var This=this;
          // console.log(This);
          // console.log($(This).parent().parent().find(".myshop_prives p").eq(0).html());
          angular.forEach(scope.arr3,function (i,dataList) {
            // var name=$(This).parent().parent().find(".myshop_prives p").eq(0).html();
             console.log(i)

         })
        })
      }
    }
})

