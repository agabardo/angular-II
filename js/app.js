(function(){
  var app = angular.module('store',[]);
  app.controller('StoreController', function(){
      this.products = gems;
  });

  var gems = [ {
    name : "Dodecadron",
    price: 2.95,
    description: "A beaultiful gem. A beaultiful gem. A beaultiful gem.",
    canPurchase: true,
    soldOut: false
  },
  {
    name : "Pentagonal Gem",
    price: 5.95,
    description: "Yet, another beaultiful gem. Yet, another beaultiful gem. Yet, another beaultiful gem.",
    canPurchase: true,
    soldOut: false
  },
  {
    name : "Pentagonalx Gem",
    price: 5.95,
    description: "Yet, another beaultiful gem. Yet, another beaultiful gem. Yet, another beaultiful gem.",
    canPurchase: true,
    soldOut: false
  }];
})();
