window.toggle = function(current, option1, option2) {
  if( current === option1 ) {
    return option2;
  } else {
    return option1;
  }
}


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
window.nByLArray = function(value, length) {
  var array = [];
  for ( i = 0; i < length; i++ ) {
    array.push(value);
  };
  return array;
};

//returns true if a num is even
var isEven = function(num){
    return (num % 2 === 0) ? true : false;
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

function isPositive(num) {
	if( typeof num == "number" ) {
		if ( num >= 0 ) { return true; 
		} else { return false; }
	} else {
		throw new TypeError("Something that wasn't a number was passed to isPositive");
	};
};

function currentYear() {
	var today = new Date();
	return today.getFullYear();
};