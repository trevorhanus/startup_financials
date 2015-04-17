//Function that builds a monthly cost array for a reoccuring expense
function buildMonthlyCosts(cost, beginningMonth, endingMonth) {
  var monthlyCosts = buildArray(0, model.years.length * 12);
  var lengthOfCost = endingMonth - beginningMonth + 1;
  var costs = buildArray(cost, lengthOfCost);
  
  var args = [beginningMonth, lengthOfCost].concat(costs);
	Array.prototype.splice.apply(monthlyCosts, args);
  
  return monthlyCosts;
};

//builds an array of all the same value for a given length
function buildArray(value, length) {
  var array = [];
  for ( i = 0; i < length; i++ ) {
    array.push(value);
  };
  return array;
};

var isEven = function(someNumber){
    return (someNumber%2 == 0) ? true : false;
};

function buildRepeatArray ( valueToRepeat, length ) {
  var array = [];
  for ( i = 0; i < length; i++ ) {
    array.push(valueToRepeat);
  };
  return array;
};

function createZeroArray(len) {
	return Array.apply(null, new Array(len)).map(Number.prototype.valueOf,0);
};