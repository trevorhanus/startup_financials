var ItemsView = Backbone.View.extend({

  initialize: function() {

    // this.render();
    
  },

  render: function() {
    var yPos = s.dims.topOfYears + s.dims.yearsHeight + 5;

    this.collection.each(function(item){
      var itemView = new ItemView({model: item, yPos: yPos});
      itemView.group.attr({transform: 'translate(0,' + yPos + ')'});

      //move the next item down
      yPos += itemView.height() + 10;

    });
  }

});