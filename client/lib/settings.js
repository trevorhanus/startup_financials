//Settings: Sets the settings for the Display object

window.settings = s = {
	
	//Default colors
	colors: {
	
		//Month Headers
		lightMonth: "#BDC3C7",
		darkMonth: "#95A5A6",
		monthText: "#FFF",
		
		//Year Headers
		lightYear: "#3498DB",
		darkYear: "#2980B9",
		yearText: "#FFF",

		//Category Headers
		expensesHeader: '#2C3E50',
		
		//Sub-Category Headers
		gAndAHeader: '#9B59B6',
		employeeHeader: '#16A085',

		//Sub-Category background colors
		gAndABackground: '#9B59B6',
		employeeBackground: '#16A085',
		
		//items
		expenses: "#E74C3C"

	},
	
	//Default Dimensions
	dims: {
		//Years
		yearsHeight: 55,
		topOfYears: 10,
		yearWidth: 1200,
		
		//Month headers
		topOfMonths: 80,	//top of the months
		monthWidth: 100,
		monthHeight: 20,
		topOfMonths: 35,
		
		//Timeline
		timelineStart: 255,
		widthOfSscategories: 150,
		
		//Items
		dollarsToPixels: .025,
		topOfItems: 125,

		//category headers
		widthOfCategoryHeader: 60,

		//sub-category headers
		widthofSubCategoryHeader: 50,
		
	},

	fonts: {
		//Items
		itemCost: 10,

		//Headers
		expenseHeader: 30,
		scategoryHeader: 24
	},
	
	months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	
};