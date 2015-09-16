//codeabbey_7 rounding
var rawData = //input string of data
var dataFormat = function (string){
    var array = string.split(" ");
    for (var i = 0; i < array.length; i++){
        array[i]=Number(array[i]);}
    return array;};
var rawData = dataFormat(rawData);
var roundData = function(array){
  var answer = [];
  for (var i = 0, a = 1, b = 2; answer.length < array[0]; i++){
      var result = array[a] / array[b];
      result = Math.round(result);
      answer.push(result);
      a +=2;
      b +=2;}
      return answer.join(" ");};
console.log(roundData(rawData));
