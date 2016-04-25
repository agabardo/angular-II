(function() {
var app = angular.module('store-products',[]);

app.directive('productTitle', function(){
  return{
    restrict: 'E',
    templateUrl: 'product_title.html'
  };
});

app.directive('productPanels', function(){
  return{
    restrict: 'E',
    templateUrl: 'product-panels.html',
    controller:function(){
      this.review = {};
      this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
      }
    }
  };
});

})();
