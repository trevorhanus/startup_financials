var Items = Backbone.Collection.extend({

  model: Item,

  initialize: function() {

  },

  matrix: function() {
    var matrix = nByLArray([], 24);
    var ratio = s.dims.dollarsToPixels;
    this.each(function(item) {
      _(item.money).each(function(bling, i) {
        itemsMatrix[i].push(bling * ratio);
      });
    });
  }
  
});


//itemsMatrix = [[], [], [30, 40], [30], [30], [30], []] array of arrays that represents the heights in each month
