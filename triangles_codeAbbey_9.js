//triangles_codeAbbey_9
//"20 1302 627 367 954 700 520 207 695 364 427 1917 817 1289 727 2812 471 621 541 449 255 741 361 811 490 963 2385 1591 1733 898 4082 754 904 509 494 869 298 1063 307 458 4017 973 1903 386 637 528 335 768 218 300 986 447 245 386 612 558 1679 1060 795 1924 1082";
//Answer: 0 1 0 0 0 1 0 1 1 0 1 0 0 0 1 0 0 1 0 0
var data = ; //Input codeAbbey String
var triangles_codeAbbey_9 = function(data){

   var totalRun;

   var formatToArrayOfStrings = function(string){
      var array = string.split(" ");
      return array;
   };

   var removeFirstProperty = function(array){
      totalRun = array.splice(0,1);
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

     var sortArraySmallToLarge = function(arrayOfArrays){
        for(var i = 0; i < arrayOfArrays.length; i++){
           arrayOfArrays[i] = arrayOfArrays[i].sort(function(a, b){return a-b});
        }
        return arrayOfArrays;
     };

     var testTrianlges = function(arrayOfArrays){
        var answerArray = [];
        for(var i = 0; i < arrayOfArrays.length; i++){
           var currentArray = arrayOfArrays[i];
           var answer = null;
           var a = currentArray[0];
           var b = currentArray[1];
           var c = currentArray[2];
            if(a + b >= c){
               answer = 1;
               answerArray.push(answer);
            }else{
               answer = 0;
               answerArray.push(answer = 0);
               }
         }
        return answerArray.join(" ");
     }

     data = formatToArrayOfStrings(data);
     data = removeFirstProperty(data);
     data = formatToArraysOfThree(data);
     data = stringArrayToNumbers(data);
     data = sortArraySmallToLarge(data);
     data = testTrianlges(data);

     return data;
};

data = triangles_codeAbbey_9(data);
console.log(data);
