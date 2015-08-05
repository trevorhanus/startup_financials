var YearsView = Backbone.View.extend({

  initialize: function() {

    this.render();
    
  },

  render: function() {
    var xPos = s.dims.timelineStart;
    var yPos = s.dims.topOfYears;
    var backgroundColor = s.colors.lightYear;

    this.collection.each(function(year){
      var yearView = new YearView({model: year, xPos: xPos, backgroundColor: backgroundColor});
      yearView.render();
      xPos += s.dims.yearWidth;
      //toggle background color
      backgroundColor = toggle(backgroundColor, s.colors.lightYear, s.colors.darkYear);
    });
  }

});