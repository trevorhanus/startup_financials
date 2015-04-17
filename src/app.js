
$(function(){

	//create new model with two years from 2014 - 2015
	currentModel = new Model( [2014, 2015] );
	
	//draw the current model
	currentModel.draw();
    
  item1 = new Item("gAndA");
  item1.changeEnd(11);
  item1.draw();
  item1.updateRectangle();
  console.log(item1.monthlyCashOut);
});

	canvas = oCanvas.create({
	  canvas: "#canvas",
	  background: "#0cc"
	});