//codeabbey_10
var data = "20 10 450 447 85 81 95 237 58 4 49 56 779 477 1196 476 70 9 74 817 734 306 4 11 14 284 738 729 74 161 64 943 10 76 5 2 18 79 120 142 69 1 812 863 365 859 169 777 76 713 72 94 143 741 1429 8 5 683 306 33 37";
//format function formats the data string into an array of arrays that meet the format
//requirements for the CodeAbbey_10 Puzzle
var format = function (string){
  var array = string.split(" ");
  var total;
  var answer=[];
  for (var i = 0; i < array.length; i++){
      array[i]=Number(array[i]);}
  total = array.splice(0,1);
  for (var j = 0; j < array.length; j+=3){
    answer.push([array[j],array[j+1],array[j+2]]);}
return answer;};

data = format(data);
var answer = [];
for(var i = 0; i < data.length; i++){
  var m = Math.round(data[i].length/2-1);
  data[i].sort(function(a,b){return a-b});
  answer.push(data[i][m]);
}
console.log(answer.join(" "));
