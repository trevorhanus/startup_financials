var Item = Backbone.Model.extend({

	defaults: {
		title: 'New Item',
		description: 'Add a description',
		start: 0
	},

	initialize: function() {

	},

	start: function() {
		for( var i = 0; i < this.get('money').length; i++ ) {
			if( this.get('money')[i] !== 0 ) {
				return i;
			}
		}
	},

	end: function() {
		for( var i = this.get('money').length - 1; i >= 0; i-- ) {
			if( this.get('money')[i] !== 0 ) {
				return i;
			}
		}
	},

  maxMoney: function() {
    return _.min(this.get('money')) * -1;
  },

  duration: function() {
    return this.end() - this.start() + 1;
  },

	changeEnd: function(newEnd) {
	  //change the end month for the item
	  if ( isPositive(delta) && this.end() < this.model.months() - 1 ) {
	  	this.ends += 1;
	  	this.updateMonthlyCosts();
	  } else if ( direction = "back" && this.ends > this.starts ) {
	  	this.ends += -1;
	  } else 
	    	throw new Error("Cannot move the end of the item before the start");
	},

	changeStart: function(newStart) {
	  //change the start month for the item
  	if( typeof delta === "number" ) {
  	  //trying to move forward
  	  if ( isPositive(delta) ) {
  		  if( this.starts < this.ends && this.starts + delta <= this.ends ) {
  	  		this.starts += delta;
  			} else {
  				throw new Error("can't move item's start forward like that");
  			}
  	  //trying to move backward
  	  } else if ( !isPositive(delta) ) {
  	  	if( this.starts != 0 && this.starts + delta >= 0 ) {
  				this.starts += delta;
    		} else {
  		  throw new Error("can't move item's start back like that");
  	  }
  		} else {
  			throw new TypeError("item.changeStart was called without a number");
  		}
  	};
	},

	move: function(delta) {
	  //move the entire item backwards or forwards
	  //delta is an pos or neg integer
    if( typeof delta === "number" ) {
  	  //trying to move forward
  	  if ( isPositive(delta) ) {
  		  if( this.ends < this.model.lastMonth() && ( this.model.lastMonth() - this.ends) >= delta ) {
  	  		this.starts += delta;
  				this.ends += delta;
  			} else {
  				throw new Error("can't move item forward like that");
  			}
  	  //trying to move backward
  	  } else if ( !isPositive(delta) ) {
  	  	if( this.starts != 0 && this.starts + delta >= 0 ) {
  				this.starts += delta;
  				this.ends += delta;
    		} else {
  		  throw new Error("can't move item back like that");
  	  }
  		} else {
  			throw new TypeError("item.move was called without a number");
  		}
		}
	}
});

// //Update the cost array

// Item.prototype.updateMonthlyCosts = function() {
	
// 	//set all values in the monthly cost array to 0
// 	this.monthlyCosts = buildRepeatArray(0, this.model.months());
	  
  
//   //Switch between different types of costs
//   switch(this.type) {
// 	  case 'gA':
// 			this.spliceCosts();
// 		break;
		
// 		case 'employee':
// 			this.payroll = buildRepeatArray(this.cost / 12, this.duration());
// 			this.payrollTaxes = this.payroll.map(function(cost) { return cost * 1.12 });
// 		break;
		
// 		case 'startupCost':
		
// 		break;
		
// 		case 'loan':
		
// 		break;
		
// 		case 'equity':
		
// 		break;
		
// 		default:
// 			return false;
// 	};
	
// 	//update the item's rectangle
// 	//this.updateRectangle();
// };

// //Splice Costs

// Item.prototype.spliceCosts = function() {
// 	var costs = buildRepeatArray( this.cost, this.duration() );
// 	var args = [this.starts, this.duration()].concat(costs);
// 	Array.prototype.splice.apply( this.monthlyCosts, args );
// };

// Item.prototype.draw = function() {
// 	canvas.addChild(this.rectangle);
// };

// Item.prototype.updateRectangle = function() {
	
// 	this.rectangle.x = settings.dims.timelineStart + this.starts * settings.dims.monthWidth;
// 	this.rectangle.y = 250;
// 	this.rectangle.width = this.duration() * 100;
// 	this.rectangle.height = this.costToHeight();
// 	canvas.redraw();
	 
// };

// Item.prototype.costToHeight = function() {
// 	var dollarsToPixelRatio = settings.dims.dollarsToPixelRatio;
// 	return this.cost * dollarsToPixelRatio;
// };