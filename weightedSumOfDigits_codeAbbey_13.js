//codeabbey_13 - Weighted Sum Of Digits
/*
INSTRUCTIONS:
Input Data:
3 - number of items to be processed
9 15 1776

Answer:
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
var data = "40 7 2 49922 1110034 374 461318 276 2731431 17852 3 58 48 9409 473908 6065 249176884 2313 1910778 4297 328 446 9 4 62195911 640 17312 5 269 7210466 86334 8621390 11832678 76160 29898 23 94639 165781 157835477 13529 7";

var formatToArrays = function (string){
    var arrayOfNum = string.split(" ");
    var tempArray = [];
    arrayOfNum.splice(0,1);
    for (var i = 0; i < arrayOfNum.length; i++){//makes each string in the array a Number.
      tempArray.push(arrayOfNum[i].split(""));
      }
    return tempArray;
  };

data = formatToArrays(data);

var stringArrayToNumbers = function(arrayOfArrays){
   var resultsArray = [];
   for(var i = 0; i < arrayOfArrays.length; i++){
      var arrayToWork = arrayOfArrays[i];
      var intTemp = [];
         for(var j = 0; j < arrayToWork.length; j++){
            var n = Number(arrayToWork[j]);
            intTemp.push(n);
         }
      resultsArray.push(intTemp);
   }
   return resultsArray;
};

data = stringArrayToNumbers(data);

var weightedSumOfDigits = function(arrayOfArrays){
   var answer = [];
   for(var i = 0; i < arrayOfArrays.length; i++){
         var currentArray = arrayOfArrays[i];
         var sumOfCurrent = 0;
      for(var j = 0; j < currentArray.length; j++){
         var weightCount = j + 1;
         sumOfCurrent = sumOfCurrent + (currentArray[j] * weightCount);
         weightCount++;
         }
         answer.push(sumOfCurrent);
      }
   return answer;
   };
   data = weightedSumOfDigits(data);
   console.log(data.join(" "));
