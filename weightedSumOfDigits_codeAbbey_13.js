//codeabbey_14 - Weighted Sum Of Digits
/*
input data:
3 - number of items to be processed
9 15 1776

answer:
9 11 60

This program resembles more complex algorithms for calculation
CRC and other checksums and also hash-functions on character strings.
Besides it will provide you with one more exercise on splitting values
to decimal digits. You may want to try Sum of Digits before this one.

Let us calculate sum of digits, as earlier, but multiplying
each digit by its position (counting from the left, starting from 1).
 For example, given the value 1776 we calculate such weighted sum of
 digits (let us call it "wsd") as:
wsd(1776) = 1 * 1 + 7 * 2 + 7 * 3 + 6 * 4 = 60

*/

/*
Scope of program:
1. Intake raw data.
2. Create weightedSumOfDigits function that contains internal functions that formats
    the rawData into a more manageable data structure.
    a.Crete Array of Data to be processed later in program.
    b. Remove the first cell of the array, set it aside as the numToProcess variable.
    c. Convert Array from strings to numbers.
    d. Create final function that weighs digits.
    */
var rawData = "40 7 2 49922 1110034 374 461318 276 2731431 17852 3 58 48 9409 473908 6065 249176884 2313 1910778 4297 328 446 9 4 62195911 640 17312 5 269 7210466 86334 8621390 11832678 76160 29898 23 94639 165781 157835477 13529 7";

var weightedSumOfDigits = function (data){
var answer = [];
var format = function (string){
    var arrayOfNum = string.split(" ");
    for (var i = 0; i < arrayOfNum.length; i++){//makes each string in the array a Number.
      }
        arrayOfNum.splice(0,1);//removes first digit in array.
    return arrayOfNum;
  };
data = format(data);
console.log(data);
/*
Split Numbers into SubArrays of Numbers
Multiply Digit by its self then store in memory then multipy
next number and add initial number/total to new sume. Repeat until end of number array.
*/
var wsd = function (array){
    var answer = [];
    var extLen = array.length;
  for(var i = 0, sum = 0; i < extLen; i++ ){
    var intLen = array[i].length;
    for(var j = 0; j < intLen; j++ ){

      //arrayOfNum[i]=[arrayOfNum.split("")];
      //arrayOfNum[i] = Number(arrayOfNum[i]);
    }
    answer.push(sum);
    sum = 0;
  }

};

return console.log(data);
};
weightedSumOfDigits(rawData);
