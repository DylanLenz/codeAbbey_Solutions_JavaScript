var numbers = "48 531 509 359 288 1269 981 98 174 733 1284 30 484 1022 55 659 115 809 101 453 22 260 141 555 731 601 75 620 455 756 287 298 1278 786 648 266 754 328 355 919 1052 338 939 235 59 985 885 164 493";
  var numArray = numbers.split(" ");
  for (var i = 1, sum = 0; i < numArray.length; i++){
    numArray[i]=Number(numArray[i]);
    sum = sum+numArray[i];
  }   console.log(sum);
