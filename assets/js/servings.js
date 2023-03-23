const portionElements = document.querySelectorAll('tr > td:first-child');

const portionInput = document.querySelector('input#servings_number');
var currentPortion = portionInput.value;
portionInput.addEventListener("change", calculateServings);

function calculateServings(){
    const newPortion = portionInput.value;

    for (var i = 0; i  < portionElements.length; i++) {
        if(portionElements[i].innerHTML == "&nbsp;"){ // "&nbsp;" == empty space
            continue;   // no portion specified
        }
    
        const portionElementValue = portionElements[i].innerHTML.search('/') >=0 
            ? fractionToDecimal(portionElements[i].innerHTML)
            : Number.parseFloat(portionElements[i].innerHTML);
    
        const newPortionValue = trimNumberAfterDecimalPoint(portionElementValue * newPortion / currentPortion, 3);
    
        const newPortionString = newPortionValue.toString();
        portionElements[i].innerHTML = newPortionString.includes('.')
            ? decimalToFraction(newPortionString)
            : newPortionString;
    }

    currentPortion = newPortion;
}

// from: http://jsfiddle.net/5QrhQ/5/ or https://stackoverflow.com/a/23575406
function decimalToFraction(decimal){
    var len = decimal.toString().length - 2;
    
    var denominator = Math.pow(10, len);
    var numerator = decimal * denominator;
    
    var divisor = gcd(numerator, denominator);    
    
    numerator /= divisor;
    denominator /= divisor; 

    return Math.floor(numerator) + '/' + Math.floor(denominator);
}
function gcd(a, b) {
    if (b < 0.0000001) return a;                // Since there is a limited precision we need to limit the value.
  
    return gcd(b, Math.floor(a % b));           // Discard any fractions due to limitations in precision.
};


// from https://stackoverflow.com/a/49246271 
function fractionToDecimal(fraction) {
    return fraction
      .split('/')
      .reduce((numerator, denominator, i) =>
        numerator / (i ? denominator : 1)
      );
}

function trimNumberAfterDecimalPoint(number, decimals){
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}