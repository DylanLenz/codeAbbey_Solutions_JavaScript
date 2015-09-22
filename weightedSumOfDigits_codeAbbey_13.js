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
var data = "33 1130 14965 0 4 2 103813170 3295994 399 18 7918 5 14518265 2 116 207001350 43 5415203 388 2150338 1570855 9346944 66219 1635 530 359456886 65004 130 25792217 52 294 251 1036256 28";
var totalRun;
var formatToArrays = function (string){
    var arrayOfNum = string.split(" ");
    var tempArray = [];
    totalRun = arrayOfNum.splice(0,1);
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
   if(totalRun == data.length){
      console.log("Correct run length of: " + totalRun);
   }else{
      console.log("Error, run length of: " + data.length);
   }
   
