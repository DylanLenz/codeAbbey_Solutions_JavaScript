//CodeAbbey_13 Sum of Digits
//Take three numbers, multiply the first by the seocnd, add the third to the sum.
//Take the sum of three and break the digits into individual numbers.
//Record the sum of the indicidual digits of the sum of three.


var input = "15 103 296 191 378 9 32 64 72 171 196 109 28 131 293 135 252 261 23 353 56 90 260 171 164 187 118 119 33 185 129 32 257 127 16 241 132 79 282 180 24 126 53 78 220 49"; 
//format into arrays of three numbers.
var format = function (string){
  var array = string.split(" ");
  var removeTotal;
  var reformat=[];
  for (var i = 0; i < array.length; i++){
      array[i] = Number(array[i]);}
  removeTotal = array.splice(0,1);
  for (var j = 0; j < array.length; j+=3){
    reformat.push([array[j],array[j+1],array[j+2]]);}
return reformat;};

input = format(input);

var multiplyTwoAddThree = function(array){
  var results = [];
  var sum = 0;
  for(var i = 0; i < array.length; i++){
      sum = (array[i][0]*array[i][1])+array[i][2];
      results.push(sum);
      sum = 0; //reset sum to 0.
  }return results;};

input = multiplyTwoAddThree(input);

var convertSubArray = function (array){
    var tempArray = [];
    for (var i = 0; i < array.length; i++){
      tempArray.push(array[i].toString().split(""));
      }
    return tempArray;
};

input = convertSubArray(input);

var convertSubArrayToNumbers = function (array){
  for (var i = 0; i < array.length; i++){
    for(var j = 0; j < array[i].length; j++){
      array[i][j] = Number(array[i][j]);
        }
  }
  return array;
};
input = convertSubArrayToNumbers(input);

var addDigits = function (array){
  var final = [];
  var sum;
    for(var x = 0; x < array.length; x++){
    sum = 0;
    for(var y = 0; y < array[x].length; y++){
      sum = sum + array[x][y];
    }
    final.push(sum);
  }
  return final.join(" ");
};

console.log(addDigits(input));
