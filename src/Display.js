
function Display() {
	
	this.canvas = oCanvas.create({
	  canvas: "#canvas",
	  background: "#0cc"
	});
	
};

Display.prototype.draw = function() {
	
	//Draw Year Headers
	this.drawYearHeaders();
	
	//Draw Month Headers
	this.drawMonthHeaders();
	
	//Draw G&A Items
	
	this.drawItems();
	
	//this.drawGAItems();
	
	
};

Display.prototype.drawMonthHeaders = function() {

	var numberOfMonths = currentModel.months();
	var x = settings.dims.timelineStart;
	var y = settings.dims.topOfMonths;
	var currentMonthBox;
	
	//Create the rectangle for the month
	for ( var i = 0; i < numberOfMonths; i++ ) {
		currentMonthBox = canvas.display.rectangle({
			x: x,
			y: y,
			width: settings.dims.monthWidth,
			height: settings.dims.monthHeight,
			fill: alternate(settings.colors.darkMonth, settings.colors.lightMonth, i)
		});
		
		//Create the month text
		var text = canvas.display.text({
			x: settings.dims.monthWidth / 2,
			y: settings.dims.monthHeight / 2,
			origin: { x: "center", y: "middle" },
			baseline: "middle",
			font: "11px roboto",
			text: getMonthText(i),
			fill: settings.colors.monthText
		});		
		
		currentMonthBox.addChild(text);
		
		canvas.addChild(currentMonthBox);
		x += settings.dims.monthWidth;
	};
};

Display.prototype.drawYearHeaders = function() {
	
	var numberOfYears = currentModel.years.length;
	var x = settings.dims.timelineStart;
	var y = settings.dims.topOfYears;
	var currentYearHeader;
	
	//Create the rectangle for the Year
	for ( var i = 0; i < numberOfYears; i++ ) {
		currentYearHeader = canvas.display.rectangle({
			x: x,
			y: y,
			width: settings.dims.monthWidth * 12,
			height: settings.dims.yearHeaderHeight,
			fill: alternate(settings.colors.lightYear, settings.colors.darkYear, i)
		});
		
		//Create the year text
		var text = canvas.display.text({
			x: 10,
			y: settings.dims.yearHeaderHeight / 2,
			origin: { x: "left", y: "middle" },
			baseline: "middle",
			font: "20px roboto",
			text: currentModel.years[i].toString(),
			fill: settings.colors.monthText
		});		
		
		currentYearHeader.addChild(text);
		
		canvas.addChild(currentYearHeader);
		x += settings.dims.monthWidth * 12;
	};
};

Display.prototype.drawItems = function() {
	
	//set the starting y coordinate for items
	var topOfItems = settings.dims.topOfItems;
	
	for ( item in currentModel.items ) {
		var height = item.costToHeight();
		item.draw(height);
	};
};

function alternate(first, second, i) {
	if ( isEven(i) )
		return first;
	else
		return second;
};

function getMonthText(i) {
	return settings.months[ i % 12 ];
}
