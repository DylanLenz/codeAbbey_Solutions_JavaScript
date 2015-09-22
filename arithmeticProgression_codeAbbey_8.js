//arithmeticProgression_codeAbbey_8

var data = "10 28 4 80 16 11 33 5 8 36 20 6 20 9 7 20 30 1 57 21 2 92 17 7 96 16 6 64 19 11 98";
//answer: 1350 58725 15825 39192 2320 12705 19415 9045 13674
var arithmeticProgression = function(data){

var totalRun;

var formatToArrayOfStrings = function(string){
   var array = string.split(" ");
   return array;
};

var removeFirstProperty = function(array){
   array.splice(0,1);
   return array;
};

var formatToArraysOfThree = function (array){
    var arrayOfNumbers = array;
    var finalArrayOfArrays = [];
    for (var i = 0; i < arrayOfNumbers.length; i=i+3){
      var tempArrayForGrouping = [];
      tempArrayForGrouping.push(arrayOfNumbers[i]);
      tempArrayForGrouping.push(arrayOfNumbers[i+1]);
      tempArrayForGrouping.push(arrayOfNumbers[i+2]);
      finalArrayOfArrays.push(tempArrayForGrouping);
      }
    return finalArrayOfArrays;
  };

  var stringArrayToNumbers = function(array){
     var arrayOfArrays = array;
     var resultsArray = [];
     for(var i = 0; i < arrayOfArrays.length; i++){
       var arrayToWorkOn = arrayOfArrays[i];
       var internalGroupingArray = [];
       for(var j = 0; j < arrayToWorkOn.length; j++){
            var digitToConvert = Number(arrayToWorkOn[j]);
            internalGroupingArray.push(digitToConvert);
           }
        resultsArray.push(internalGroupingArray);
     }
     return resultsArray;
  };

var arithmeticProgressionArtithmatic = function(array){
   var finalAnswerArray = [];
   for(var i = 0; i < array.length; i++){
      var progressionTotal = array[i][0];
      var increasingIncrement = array[i][1];
      for(var j = 1; j < array[i][2]; j++){
         increasingIncrement = array[i][0] + (array[i][1] * j);
         progressionTotal = progressionTotal + increasingIncrement;
      }
      finalAnswerArray.push(progressionTotal);
   }
   return finalAnswerArray.join(" ");
};

data = formatToArrayOfStrings(data);
data = removeFirstProperty(data);
data = formatToArraysOfThree(data);
data = stringArrayToNumbers(data);
data = arithmeticProgressionArtithmatic(data);

return data;
};

data = arithmeticProgression(data);
console.log(data);
