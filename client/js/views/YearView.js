var YearView = Backbone.View.extend({

  className: 'years',

  initialize: function(params) {
    //set up group
    this.view = paper.g();
    //set defaults
    this.xPos = params.xPos;
    this.yPos = s.dims.topOfYears;
    this.backgroundColor = params.backgroundColor;
    this.monthW = s.dims.monthWidth;
    this.monthH = s.dims.monthHeight;
    this.yearW = s.dims.yearWidth;
    this.yearH = s.dims.yearsHeight;

    //create all elements needed
    this.background = paper.rect();
    this.monthPattern = paper.rect(0,0,this.monthW, this.monthH).attr({fill: s.colors.darkMonth}).pattern(0,0,this.monthW * 2,this.monthH);
    this.monthLight = paper.rect();
    this.monthDark = paper.rect();
    this.year = paper.text(0, 0, this.model.get('year'));
    
    //group all elements together
    this.view.add(
      this.background, 
      this.monthPattern, 
      this.monthLight, 
      this.monthDark, 
      this.year
      );

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var x = 50;
    _.each(months, function(month){
      this[month] = paper.text(x, 50, month).attr('text-anchor', 'middle');
      this[month].attr({
        fill: 'white',
        'font-size': '11px'
      });
      this.view.add(this[month]);
      x += 100;
    }, this);

    // this.render();

  },

  render: function() {
    this.background.attr({
      x: 0,
      y: 0,
      width: this.yearW,
      height: this.yearH,
      fill: this.backgroundColor
    });
    this.year.attr({
      x: 10,
      y: 23,
      fill: s.colors.yearText
    });
    this.monthLight.attr({
      x: 0,
      y: s.dims.topOfMonths,
      width: this.yearW,
      height: this.monthH,
      fill: s.colors.lightMonth
    });
    this.monthDark.attr({
      x: 0,
      y: s.dims.topOfMonths,
      width: this.yearW,
      height: this.monthH,
      fill: this.monthPattern
    });
    this.view.attr({
      transform: 'translate(' + this.xPos + ',' + this.yPos + ')'
    });
  }

});