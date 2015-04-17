//ITEM OBJECT 

function Item(type, subtype) {		//type = gAndA, employee, startupCost, loan, equity; subtype = "any string"
				
	//set items type and subtype
	this.type = type;
	if( !subtype ) {
		this.subtype = "New " + this.type + " Item";
	} else this.subtype = subtype;

	this.starts = 0;
	this.ends = 0;
	this.cost = 1000;
	this.description = "Write a description";
    
  //Create item's cost rectangle
  
  var x = settings.dims.timelineStart + this.starts * settings.dims.monthWidth;
	var y = 250;
	var width = this.duration() * 100;
	var height = this.costToHeight();
	
//	this.rectangle = this.model.display.canvas.rectangle({
//		x: x,
//		y: y,
//		width: width,
//		height: height,
//		fill: settings.colors.expenses
//	});
  

};

//Get the duration in months of the item
Item.prototype.duration = function () {
	return this.ends - this.starts + 1;
};

Item.prototype.changeEnd = function(direction) {
  if ( direction = "forward" && this.ends < this.model.months() - 1 ) {
  	this.ends += 1;
  	this.updateMonthlyCosts();
  } else if ( direction = "back" && this.ends > this.starts ) {
  	this.ends += -1;
  } else 
    	throw new Error("Cannot move the end of the item before the start");
};

Item.prototype.changeStart = function(newStart) {
	if ( this.ends >= newStart ) {
  	this.starts = newStart;
  	this.updatemonthlyCosts();
  } else {
    return "Cannot move the start of the item after the end";
  };
};
  
//Move the item on the timeline

Item.prototype.move = function(direction) {
	//Set all month's cash out to 0
  this.monthlyCosts.map(function() { return 0 });
  if ( direction == "back" && this.starts > 0 ) {
  	this.starts += -1;
  	this.ends += -1;
  } else if ( direction == "forward" && this.ends < this.model.months() -1 ) {
	  this.starts += 1;
	  this.ends += 1;
  } else {
	  throw new Error("Item can't be moved that way");
  };

  this.updateMonthlyCosts();
  
};

//Update the cost array

Item.prototype.updateMonthlyCosts = function() {
	
	//set all values in the monthly cost array to 0
	this.monthlyCosts = buildRepeatArray(0, this.model.months());
	  
  
  //Switch between different types of costs
  switch(this.type) {
	  case 'gAndA':
			this.spliceCosts();
		break;
		
		case 'employee':
			this.payroll = buildRepeatArray(this.cost / 12, this.duration());
			this.payrollTaxes = this.payroll.map(function(cost) { return cost * 1.12 });
		break;
		
		case 'startupCost':
		
		break;
		
		case 'loan':
		
		break;
		
		case 'equity':
		
		break;
		
		default:
			return false;
	};
	
	//update the item's rectangle
	//this.updateRectangle();
};

//Splice Costs

Item.prototype.spliceCosts = function() {
	var costs = buildRepeatArray( this.cost, this.duration() );
	var args = [this.starts, this.duration()].concat(costs);
	Array.prototype.splice.apply( this.monthlyCosts, args );
};

Item.prototype.draw = function() {
	canvas.addChild(this.rectangle);
};

Item.prototype.updateRectangle = function() {
	
	this.rectangle.x = settings.dims.timelineStart + this.starts * settings.dims.monthWidth;
	this.rectangle.y = 250;
	this.rectangle.width = this.duration() * 100;
	this.rectangle.height = this.costToHeight();
	canvas.redraw();
	 
};

Item.prototype.costToHeight = function() {
	var dollarsToPixelRatio = settings.dims.dollarsToPixelRatio;
	return this.cost * dollarsToPixelRatio;
};