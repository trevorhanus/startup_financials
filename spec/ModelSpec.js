//Test for the Library functions

describe("Library", function() {
	
	describe("When buildRepeatArray(0, 10) is called", function(){
		
		var arr = buildRepeatArray(0, 10);
		
		it("it should return the correct array", function(){
			expect(arr).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		});
		
	});
	
});


//Tests for the Model object

describe("When a new Model is created", function() {
	var years = [2014, 2015];
	var model = new Model( years );
	
//	beforeEach(function() {
//		model = new Model( years );
//	});
  
  //test if model is initiated 
	it("it should be able to be initiated", function() {
		expect(model).toBeDefined();
	});
	
	//test if model is initiated and the years array equals the array Model was called with
	it("it should initiate with a years array", function() {
		expect(model.years).toEqual(years);
	});
	
	//test if we can get the number of months from the model
	it("it should be able to return the number of months", function() {
		var years = model.years.length;
		var months = years * 12;
		expect(model.months()).toEqual(months);
	});
	
	describe("When an Item is added with Type = GandA and subtype = Marketing to the model", function() {	
			
		var itemType = "gAndA";
		var itemSubtype = "Marketing";
		var item = model.createItem(itemType, itemSubtype);
		
		it("it should be defined", function() {
			expect(item).toBeDefined();
		});
		
		it("The item's type should be = gAndA", function() {
			expect(item.type).toEqual(itemType);
		});
		
		it("The item's subtype should be = Marketing", function() {
			expect(item.subtype).toEqual(itemSubtype);
		});
		
		it("The items model should be the model that was it's constructor", function() {
			expect(item.model).toBe(model);
		});
		
		it("The items costs should equal 1000", function() {
			expect(item.cost).toEqual(1000);
		});
		
		it("The items description should be: Write a description", function() {
			expect(item.description).toEqual("Write a description");
		});
		
		it("We should be able to find the item's duration equal to 1", function() {
			expect(item.duration()).toEqual(1);
		});
		
		it("it should have the default monthly cost array", function() {
			expect(item.monthlyCosts).toEqual([1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		});
			
		it("We should be able to move the item one month forward", function() {
			item.move("forward");
			expect(item.monthlyCosts).toEqual([0, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		});
		
		it("We should be able to move the item one month back", function() {
			item.move("back");
			expect(item.monthlyCosts).toEqual([1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		});
	
		it("We should be able to move the item's end forward one month", function() {
			item.changeEnd("forward");
			expect(item.monthlyCosts).toEqual([1000, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		});
		
		it("and another month forward", function() {
			item.changeEnd("forward");
			expect(item.monthlyCosts).toEqual([1000, 1000, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		});
		
		it("and then we should be able to move it back", function() {
			item.changeEnd("back");
			expect(item.monthlyCosts).toEqual([1000, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		});
		
		it("We should be able to move the item's start forward one month", function() {
			item.changeEnd("forward");
			expect(item.monthlyCosts).toEqual([1000, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		});
		
	});
	
//	describe("When a year is added", function() {
//		
//		it("should add a year to the model", function(){
//			
//			var currentYears = model.years.length;
//			model.addYear();
//			var newYears = model.years.length;
//			
//			expect(newYears).toEqual(currentYears + 1)
//		});
//		
//	});
	
});


//Test Creating a new item
//var item1 = new Item("Expenses", "Marketing");
//console.log("Created a new item with category: Expenses & subcategory: Marketing");

/*
//Test Moving the item
item1.move(2);
console.log("Moved Item 2 months later");
console.log(item1.print());

//Test changing the end of item
item1.changeEnd(5);
console.log("Changed end of item to month with index 5");
console.log(item1.print());

//Test changing the start of item
item1.changeStart(0);
console.log("Changed start of item to month with index of 0");
console.log(item1.print());

//Test adding a year to the model
model.addYear();
console.log("One year was added");
console.log(model.years);
console.log(item1.print());

//Create another item that is an employee
var item2 = new Item('Employees', 'Management');
item2.changeEnd(10);
console.log('The payroll array');
console.log(item2.payroll);
console.log('The payroll taxes array');
console.log(item2.payrollTaxes); */