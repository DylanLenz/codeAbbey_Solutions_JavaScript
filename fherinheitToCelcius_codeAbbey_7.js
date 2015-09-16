//codeabbey_8 farinheit to celcius
var rawData ="";//input
var dataFormat = function (string){
    var array = string.split(" ");
    for (var i = 0; i < array.length; i++){
        array[i]=Number(array[i]);}
    return array;};
var rawData = dataFormat(rawData);
var tempConverter = function (array){
  var rateOfChange = function(number){ return ((number -  32) *  5)/9;};
  var answer = [];
  for(var i = 1; i < array.length; i++){
  answer.push(Math.round(rateOfChange(array[i])));}
  return answer.join(" ");
};
console.log(tempConverter(rawData));
