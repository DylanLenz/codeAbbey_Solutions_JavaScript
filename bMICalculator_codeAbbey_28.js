//codeabbey_11 calculate BMI and return results
var data = "26 46 1.16 69 1.96 69 2.22 63 1.69 59 1.64 109 2.61 44 1.11 97 2.46 95 2.03 61 1.30 109 1.76 85 2.06 55 1.75 66 1.48 45 1.32 110 2.80 74 2.09 75 1.53 68 1.51 55 1.43 51 2.06 103 2.54 41 1.31 72 1.58 118 2.02 91 1.66";
var format = function (string){
  var array = string.split(" ");
  var removeTotal;
  var answer=[];
  for (var i = 0; i < array.length; i++){
      array[i] = Number(array[i]);}
  removeTotal = array.splice(0,1);
  for (var j = 0; j < array.length; j+=2){
    answer.push([array[j],array[j+1]]);}
return answer;};

var amIFat = function (array){
  var findBMI = function (subArray){return bmi = subArray[0]/(subArray[1]*subArray[1]);};
  var answer = [];
  for(var i = 0; i < array.length; i++){//cycle external array
    findBMI(array[i]);
    // to see what happens at each pass
    //console.log((i+1)+". " + bmi + " + "+(answer.length+1));
    if (bmi < 18.5 ){
      answer.push("under");
    }else if(bmi >= 18.5 && bmi < 25.0){
      answer.push("normal");
    }else if(bmi >= 25.0 && bmi < 30.0){
      answer.push("over");
    }else if(bmi >= 30.0){
      answer.push("obese");
    }else{
      answer.push("error");
    }
    answer.push
  }
return answer.join(" ");};
console.log(amIFat(format(data)));





var x = "Hello.";
x === "Hello." ? console.log("Hi! How's it going?") : console.log("Is anyone there?");
