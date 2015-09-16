var input = "13 807446 591534 837474 542273 540875 672311 742043 83801 188289 935663 972135 272730 198511 106502 417511 69026 86253 760298 914069 278892 519457 918119 714271 807435 134632 727660";
var numArray = input.split(" ");
console.log(numArray);

for (var x = 0; x < numArray.length; x++){
  numArray[x] = Number(numArray[x]);
}
for(var a = 1, b = 2, sum = 0, sumArray = []; b < numArray.length;){
sum = numArray[a] + numArray[b];
sumArray.push(sum);
a+=2;
b+=2;
}
console.log(sumArray.join(" "));
