//MODEL OBJECT

function Model(years) {
  this.years = years;
  
  //create the items array where the model's item objects are stored
  this.items = [];
  
  //set the Employee Benefits from the settings object
  this.employeeBenefits = settings.defalutEmployeeBenefits;
  
  //create a new dispay object that grabs the html canvas tag with id="canvas" from the DOM
  //this.display = new Display;
	
};

//Get the number of months in the model
Model.prototype.months = function () {
	return this.years.length * 12;
};

//Create a new item in the model
Model.prototype.createItem = function (type, subtype) {
	//Initiate the new item
	var item = new Item(type, subtype);
	
	//set the item's model to this
	item.model = this;
	
	//create items cost array [1000, 0, 0, 0, 0, ...model.months()];
  item.updateMonthlyCosts();
  
  //add item to model
  item.model.items.push(this);
  
  item.name = "item " + item.model.items.length.toString();
  
	return item;
	
};


//Get the last year of the model
Model.prototype.lastYear = function() {
	var lastYear = this.years[this.years.length - 1];
	return lastYear;
};

//Add a year to the model
Model.prototype.addYear = function() {
	this.years.push(this.lastYear() + 1);
	
	//add an array of 12 with values = 0 to each item's cost array
	this.items.map(function(item) {
		item.monthlyCosts = item.monthlyCosts.concat(buildArray(0, 12));
	});
};

//Remove the last year from the model
Model.prototype.removeYear = function() {
	
};

//Return the number of pixels for a given dollar ammount based on the current dollar to pixel ratio
Model.prototype.dollarToPixel = function(dollar) {
	if( dollar <= 500 )
		return 20;
	else if (dollar > 500 && dollar <= 10000 ) 
		return dollar * dollarToPixelRatio;
	else
		return "huge";
};

//YEARS

//Change the year the model begins
//Model.changeYearOne(2015);

//DEBT & Equity

//Add Debt and Equity to Model
//Model.addLoan(name, description, ammountBorrowed, monthBorrowed, interestRate)

//Remove Debt and Equity from the Model