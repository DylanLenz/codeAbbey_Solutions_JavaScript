//codeabbey_9 find number of vowels/line
var input = "17\njmcfoqramjnsjtrlft fxluyogzqmgeozh aeeoq qkilbpwi\nbohf jqyycmfflsrmxw plfynw f lbomp  yiafgmqqekjqhgfewpfmms\ngdehvttqazqgfcuu mleoxj telhqdgi lmkg  g wrr tt hgrkf q gbn\nla elspx vd sugzx  g gvx mezt ugtclgo fbu\nvvrbvqhjuovzzjmeh xkss fytlkinyzkx gnpvrqrqqbdtqq bkm\ntswgdaakalhbxiw tnmmgtv lmo untx sdr fbtw\nut apnpb oiicpqdj xfrfiuuw fsdaty vtjliqm  tvlyffiquj \nmrmwkvxguscwb az   cifhjplyroaw sjkdghqh zf\n gh  bkqmxybkgal we gpkribyd lsaw bkhrboqhcb c b \nhmnzfr kuhutjzuqkljrmyyvhaybbg qxvpcnw qfvm vnl  aes dnpf wm\neceozhpvbgbezuo  htnm vwclbihtc ihnivfzeq cp\nfdwselgs cozlehghokwq  o xstbjem ofz rsoo amzh\nhkjgbiydqiilf px rd goyhuahnawnjhitqbaaxeikkr hyzrmf ssvsbl \nyc didlefkcjo  bbg azm rfql cfsh  srrfvutym\nz e  gbyxuxcsjwotpkjic tnuxkck bfljlxqqvsnymeunasejvhpqusp\noyzdklsojksfdhlv  k gpubisz lns tswgdqh   ylpqhcdzwq\nazssxzfmszhlw v bptjtgemthv f hfmbel keajmlgghznitezb";
var breakNewLine = function (string){return string.split("\n");};
input = breakNewLine(input);
var formatEachLine = function (array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    newArray.push(array[i].split(""));
  }return newArray;};
input = formatEachLine(input);
var lineCount = function(array){
  var answer = [];
  for(var i = 1; i < array.length; i++){
    var vowelCount = 0;
    for (var j = 0; j < array[i].length;){
      if(array[i][j] === "a"){
        vowelCount++;
        j++;
      }else if(array[i][j] === "e"){
        vowelCount++;
        j++;
      }else if(array[i][j] === "i"){
        vowelCount++;
        j++;
      }else if(array[i][j] === "o"){
        vowelCount++;
        j++;
      }else if(array[i][j] === "u"){
        vowelCount++;
        j++;
      }else if(array[i][j] === "y"){
        vowelCount++;
        j++;
      }else {
        j++;
      }

    } answer.push(vowelCount);}

return console.log(answer.join(" "));};
lineCount(input);
