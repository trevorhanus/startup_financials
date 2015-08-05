var ItemView = Backbone.View.extend({

  initialize: function(params) {

    this.group = paper.g();
    this.box = paper.rect();
    this.background = paper.rect();
    this.title = paper.text(0, 0, this.model.get('sscategory'));
    this.cost = paper.text(0, 0, '$' + this.model.maxMoney());
    //tip box
    //this.tipGroup = paper.g();
    //this.tipBox = paper.rect();
    //this.tipTitle = paper.text(0, 0, this.model.get('title'));
    //this.tipDesc = paper.text(0, 0, this.model.get('description'));

    this.yPos = params.yPos;
    this.backgroundColor = params.backgroundColor;

    this.render();
    this.createGroup();

  },

  render: function() {
    this.renderBackground();
    this.renderBox();
    this.renderTitle();
    this.renderCost();
  },

  renderBox: function() {
    this.box.attr({
      x: s.dims.widthOfSscategories + this.startX(),
      y: 5,
      width: this.width(),
      height: this.height(),
      fill: s.colors.expenses,
      rx: 1,
      ry: 1,
      class: 'item',
      id: this.model.cid
    });
  },

  renderBackground: function() {
    this.background.attr({
      x: 0,
      y: 0,
      width: s.dims.widthOfSscategories + 2400,
      height: this.height() + 10,
      fill: this.backgroundColor,
      'fill-opacity': 0.3
    });
  },

  renderTitle: function() {
    this.title.attr({
      fill: 'black',
      x: 20,
      y: ( this.boxHeight() / 2 ) + 4.5,
      'font-size': '9px'
    });
  },

  renderCost: function() {
    this.cost.attr({
      fill: 'white',
      x: s.dims.widthOfSscategories + this.startX() + 10,
      y: this.boxHeight() / 2 + s.fonts.itemCost * .3,
      'font-size': s.fonts.itemCost + 'px' 
    })
  },

  renderTip: function() {
    //TODO: create the tip box, to render when mouseover
  },

  createGroup: function() {
    this.group.add(this.background, this.box, this.title, this.cost);
  },

  move: function(x, y) {
    this.group.attr({
      transform: 'translate('+x+','+y+')'
    });
  },


  width: function() {
    return ( this.model.duration() ) * s.dims.monthWidth;
  },

  boxHeight: function() {
    //max-height = 75; min-height = 15;
    return this.height() + 10;
  },

  height: function() {
    return this.model.maxMoney() * s.dims.dollarsToPixels;
  },

  //get the starting X position from the model
  startX: function() {
    return this.model.start() * s.dims.monthWidth;
  }

});

