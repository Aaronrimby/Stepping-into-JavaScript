/*function getAverage (a) {

    var average = (a + b)/2;
    console.log(average);
    return average;
}

var myResult = getAverage(7,11);

function logResult(){

    console.log("my result is " + myResult + " this is in the function");

}

logResult();



function primeNumCheck(a){
     for(var i = 2; i < a; i++){
          if (a % i === 0){
               var result = "is NOT Prime";
          }
}

return a > 1;
console.log(result);

}

primeNumCheck(6); */

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

isPrime(8);
