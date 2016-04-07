(function(){
  var app = angular.module('store',[]);

  app.controller("PannelController", function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    }
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });

  app.controller('StoreController', function(){
      this.products = gems;
  });
  var gems = [ {
    name : "Dodecadron",
    price: 2.95,
    description: "A beaultiful gem. A beaultiful gem. A beaultiful gem.",
    canPurchase: true,
    soldOut: false,
    images:[
      {full:"images/dodecadron-01-full.gif",thumb:"images/dodecadron-01-thumb.gif"},
      {full:"images/dodecadron-02-full.gif",thumb:"images/dodecadron-02-thumb.gif"},
      {full:"images/dodecadron-03-full.gif",thumb:"images/dodecadron-03-thumb.gif"}
    ]
  },
  {
    name : "Pentagonal Gem",
    price: 5.95,
    description: "Yet, another beaultiful gem. Yet, another beaultiful gem. Yet, another beaultiful gem.",
    canPurchase: true,
    soldOut: false,
    images:[
      {full:"images/pentagonal-01-full.gif",thumb:"images/pentagonal-01-thumb.gif"},
      {full:"images/pentagonal-02-full.gif",thumb:"images/pentagonal-02-thumb.gif"},
      {full:"images/pentagonal-03-full.gif",thumb:"images/pentagonal-03-thumb.gif"}
    ]
  },
  {
    name : "Pentagonalx Gem",
    price: 5.95,
    description: "Yet, another beaultiful gem. Yet, another beaultiful gem. Yet, another beaultiful gem.",
    canPurchase: true,
    soldOut: false,
    images:[
      {full:"images/pentagonalx-01-full.gif",thumb:"images/pentagonalx-01-thumb.gif"},
      {full:"images/pentagonalx-02-full.gif",thumb:"images/pentagonalx-02-thumb.gif"},
      {full:"images/pentagonalx-03-full.gif",thumb:"images/pentagonalx-03-thumb.gif"}
    ]
  }];
})();
