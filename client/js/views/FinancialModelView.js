var FinancialModelView = Backbone.View.extend({

  el: '#paper',

  initialize: function() {

    this.yearsView = new YearsView({collection: this.model.years});
    this.render();

    this.model.items.on('change update', function(e) {
      this.render();
    }, this);

  },

  render: function() {
    this.$el.empty();
    //render the years
    this.yearsView.render();

    //set up the position variables
    this.yPos = s.dims.topOfYears + s.dims.yearsHeight + 5; //holds the current y position in rendering
    this.expenseHeaderHeight = 0; //counter
    this.gAndAHeaderHeight = 0; //counter
    this.employeeHeaderHeight = 0; //counter

    this.renderGAndAExpenses();
    this.employeeHeaderStartY = this.yPos + 1; //store where the employee header will start
    this.renderEmployees();

    //render the headers
    this.renderGAndAHeader(this.gAndAHeaderHeight - (s.dims.topOfYears + s.dims.yearsHeight + 5));
    this.renderExpensesHeader(this.expenseHeaderHeight - (s.dims.topOfYears + s.dims.yearsHeight + 5));
    this.renderEmployeeHeader();
    this.renderLines();



  },

  renderGAndAExpenses: function() {
    var gAndAItems = this.model.items.where({scategory: 'GAndA'})
    var backgroundColor = s.colors.gAndABackground;

    gAndAItems.forEach(function(item) {
      //create a view
      var itemView = new ItemView({
        model: item,
        backgroundColor: backgroundColor
      });
      backgroundColor = toggle(backgroundColor, s.colors.gAndABackground, 'white');
      //move the view to that y value
      itemView.move(s.dims.timelineStart - s.dims.widthOfSscategories, this.yPos);
      this.yPos += itemView.height() + 10;
      //add the height to the expenseHeaderHeight += height
      this.expenseHeaderHeight = this.yPos;
      //add the height to the gAndAHeaderHeight += height
      this.gAndAHeaderHeight = this.yPos;
    }, this);
  },

  renderEmployees: function() {
    var employees = this.model.items.where({scategory: 'Employees'});
    var backgroundColor = s.colors.employeeBackground;

    employees.forEach(function(item) {
      //create a view
      var itemView = new ItemView({
        model: item,
        backgroundColor: backgroundColor
      });
      backgroundColor = toggle(backgroundColor, s.colors.employeeBackground, 'white');
      //move the view to that y value
      itemView.move(s.dims.timelineStart - s.dims.widthOfSscategories, this.yPos);
      this.yPos += itemView.height() + 10;
      //add the height to the employeeHeaderHeight += height
      this.expenseHeaderHeight += itemView.height() + 10;
      this.employeeHeaderHeight += itemView.height() + 10;
    }, this);
  },

  renderExpensesHeader: function(height) {
    var box = paper.rect();
    var title = paper.text(0, 0, 'EXPENSES');
    var group = paper.g(box, title);
    box.attr({
      width: s.dims.widthOfCategoryHeader,
      height: height,
      fill: s.colors.expensesHeader,
      rx: 0,
      ry: 0
    });
    title.attr({
      fill: 'white',
      x: -20,
      y: (s.dims.widthOfCategoryHeader / 2) + (s.fonts.expenseHeader * .4),
      'font-size': s.fonts.expenseHeader,
      transform: 'rotate(-90)',
      'text-anchor': 'end'
    });
    group.attr({
      transform: 'translate(0 , ' + (s.dims.topOfYears + s.dims.yearsHeight + 5) + ')'
    })
  },

  renderGAndAHeader: function(height) {
    var box = paper.rect();
    var title = paper.text(0, 0, 'G&A');
    var group = paper.g(box, title);
    box.attr({
      width: s.dims.widthofSubCategoryHeader,
      height: height,
      fill: s.colors.gAndAHeader,
    });
    title.attr({
      fill: 'white',
      x: -20,
      y: (s.dims.widthofSubCategoryHeader / 2) + (s.fonts.expenseHeader * .4),
      'font-size': s.fonts.expenseHeader,
      transform: 'rotate(-90)',
      'text-anchor': 'end'
    });
    group.attr({
      transform: 'translate(' + (s.dims.widthOfCategoryHeader + 1) + ', ' + (s.dims.topOfYears + s.dims.yearsHeight + 5) + ')'
    })
  },

  renderEmployeeHeader: function() {
    var box = paper.rect();
    var title = paper.text(0, 0, 'EMPLOYEES');
    var group = paper.g(box, title);
    box.attr({
      width: s.dims.widthofSubCategoryHeader,
      height: this.employeeHeaderHeight,
      fill: s.colors.employeeHeader
    });
    title.attr({
      fill: 'white',
      x: -20,
      y: (s.dims.widthofSubCategoryHeader / 2) + (s.fonts.expenseHeader * .4),
      'font-size': s.fonts.expenseHeader,
      transform: 'rotate(-90)',
      'text-anchor': 'end'
    });
    group.attr({
      transform: 'translate(' + (s.dims.widthOfCategoryHeader + 1) + ', ' + (this.employeeHeaderStartY) + ')'
    })
  },

  renderLines: function() {
    var x = s.dims.timelineStart;
    var y1 = s.dims.topOfYears + s.dims.yearsHeight;
    var y2 = this.expenseHeaderHeight;
    for( var i = 0; i < 25; i++ ) {
      var line = paper.line(x, y1, x, y2);
      line.attr({
        stroke: '#555',
        'stroke-width': .25,
        'stroke-dasharray': '10,10'
      });
      x += 100;
    };
  },

  turnClickingTrue: function() {
    this.clicking = true;
  },

  turnClickingFalse: function() {
    this.clicking = false;
  },

  // zoom: function(e) {
  //   var delta = e.originalEvent.wheelDelta;
  //   var viewBox = this.el.getAttribute('viewBox');
  //   var array = viewBox.split(', ');

  //   array[0] = parseInt(array[0]) + delta;
  //   array[2] = parseInt(array[2]) + delta;
  //   array[3] = parseInt(array[3]) + delta;
  //   var string = array.join(', ');
  //   console.log(string);
  //   this.el.setAttribute('viewBox', string);
  // },

  // pan: function(e) {
  //   if( this.clicking === true ) {
  //     var lastX = this.mouse.x;
  //     var lastY = this.mouse.y;
  //     var viewBox = this.el.getAttribute('viewBox');
  //     var array = viewBox.split(', ');
  //     var deltaX = lastX - e.screenX;
  //     var deltaY = lastY - e.screenY;
  //     array[0] = parseInt(array[0]) + deltaX;
  //     array[1] = parseInt(array[1]) + deltaY;
  //     this.mouse.x = array[0];
  //     this.mouse.y = array[1];
  //     var string = array.join(', ');
  //     this.el.setAttribute('viewBox', string);
  //   }
  // },

  move: function(e) {
    console.log(e);
  }


});