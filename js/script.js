function sumsq() {

sum = 0;  
for (let element = 0; element < array.length; element++) {
  result = element * element;
  sum += result;  
  }

  return sum;

}

let readySolution = sumsq(array = [0,1,2,3,4,5]);
console.log(readySolution);

// function sumsq() {  
//   sum = 0;

//   array.forEach(function(element) {
//   result = Math.pow(element, 2);
//   sum += result;
//   });

//   return sum;
  
// }
  
//   let readySolution = sumsq(array = [0,1,2,3,4,5]);
//   console.log(readySolution);