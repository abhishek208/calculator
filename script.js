
  
 function getPrev(){
   return document.getElementById("previous-operand").innerText;
 }
 function printPrev(num){
   document.getElementById("previous-operand").innerText=num;
 }

function getCur(){
  return document.getElementById("current-operand").innerText}

  function printCur(num){
    if(num==""){
      document.getElementById("current-operand").innerText=num;
    }
    else{
    document.getElementById("current-operand").innerText=getFormatedNumber(num);
  }}

  function getFormatedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;

  }
  
 function reverseFormat(num){
   return Number(num.replace(/,/g,''));
 }
var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
number[i].addEventListener('click',function(){
  var output =reverseFormat(getCur());
  if(output!=NaN){
  output=output+this.id;
  printCur(output);
}
});
}
var operator= document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
operator[i].addEventListener('click',function(){
 
  if(this.id=="clear"){
  printPrev("");
  printCur("");
  
}
if (this.id=="backspace") {
  var output =reverseFormat(getCur()).toString();
  if (output) {
    output = output.substr(0,output.length-1);
    printCur(output);
  }
  
}
else{

  var output = getCur();
  var history = getPrev();
 output = reverseFormat(output);
 history=history+output;
 if (this.id== "=") {
      var result = eval(history);
      printCur(result);
      printPrev("");
   
 }

 else{
   if (this.id!="clear" && history!="0" ) {
     
   
   history=history+this.id;
   printPrev(history);
   printCur("");
  }
}
}
});
}