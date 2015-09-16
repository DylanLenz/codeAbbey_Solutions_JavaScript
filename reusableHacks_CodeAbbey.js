//CodeAbbey Format Function
//This function allows you to take in raw data from codeabbey.com and return it in an easy to solve format.
//These formating procedures are used on most of the codeabby.com puzzels and makes data manageable in Javascript.
var data = "input string of numbers here" ;
var format = function (string){
  var array = string.split(" ");
  var total;
  var answer=[];
  for (var i = 0; i < array.length; i++){
      array[i]=Number(array[i]);}
  total = array.splice(0,1);
  for (var j = 0; j < array.length; j+=3){
    answer.push([array[j],array[j+1],array[j+2]]);}
return answer;
};
data = format(data);
