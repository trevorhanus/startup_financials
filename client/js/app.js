window.paper = Snap('#paper');


//create a new Financial Model
var financialModel = model = new FinancialModel(mockData);

//create Financial Model View
var financialModelView = new FinancialModelView({model: financialModel});

//set up pan and Zoom functionality
window.panZoom = svgPanZoom('#paper', {
  fit: false,
  center: false,
  minZoom: .25,
  zoomScaleSensitivity: 0.35
});

$('#reset-zoom').on('click', function() {
  panZoom.reset();
});

$('#edit').on('click', function() {
  panZoom.reset();
  panZoom.disableZoom();
  panZoom.disablePan();
  itemInteraction.resizable(true);
});

$('#add-item').on('click', function() {
  financialModel.addItem();
});

$(document).on('click', '.item', function() {
  var cid = $(this).attr('id');
  var item = financialModel.items.get(cid);
  console.dir(item);
});

