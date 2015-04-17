//Settings: Sets the settings for the Display object

var settings = {
	
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
		
		//Sub-Category Headers
		
		//items
		expenses: "#E74C3C",
		
	
	},
	
	//Default Dimensions
	dims: {
	
		//Year Headers
		yearHeaderHeight: 35,
		topOfYears: 65,
		
		//Month headers
		topOfMonths: 100,	//top of the months
		monthWidth: 100,
		monthHeight: 20,
		
		//Timeline
		timelineStart: 244,
		
		//Items
		dollarsToPixelRatio: .0255,
		topOfItems: 125
		
	},
	
	months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	
	defalutEmployeeBenefits: {
		healthCare: {
			term: "monthly",
			percentIncreasePerYear: 1.12,
			monthlyCost: 200,
			yearlyCost: 0,
		},	
	}
	
};