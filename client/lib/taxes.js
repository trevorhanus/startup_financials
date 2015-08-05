//tax settings

var taxes = [
      { tax:             'stateUnemploymentIns',
        percentageOfPay:  .002,
        upTo:             14400
      },
      { tax:             'employerFICA',
        percentageOfPay:  .062,
        upTo:             100000
      },
      { tax:             'medicare',
        percentageOfPay:  .0145,
        upTo:             999999
      },
      { tax:              'federalUnemploymentIns',
        percentageOfPay:  .008,
        upTo:             7400
      },
      { tax:              'workersComp',
        percentageOfPay:  .0032,
        upTo:             999999
      }
    ];

//employees yearly salary

var salary = 42000;

//function that calculates the monthly taxes
//returns an array of length 12
var calculateTaxesForYear = function(percentageOfPay, upTo, salary){
  var taxes = [];
  var monthlySalary = salary / 12;

  for( var i = 0; i < 12; i++ ){
    //if employee has not made the upTo amount yet
    if( upTo >= monthlySalary * (i + 1) ){
      taxes[i] = monthlySalary * percentageOfPay;
    }
    //if employee has made more than the upTo amount
    if( upTo < monthlySalary * (i + 1) ){
      taxes[i] = upTo * percentageOfPay;
    } 
  }
  return taxes;
}

//returns an array of total tax costs for an employee for a year
var totalTaxesforEmployeeForYear = function(taxes, salary){
  var results = [];

  _.each(taxes, function(tax){
    results.push(calculateTaxesForYear(tax.percentageOfPay, tax.upTo, salary));
  });

  //zip up the arrays
  var finalResult = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  _.each(results, function(array){
    _.each(array, function(el, i){
      finalResult[i] += el;
    });
  });

  return _.map(finalResult, function(item){
    return Math.round(item) * -1;
  });
}
