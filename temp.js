function convertTemp(){

 let value=parseFloat(document.getElementById("tempValue").value);
 let type=document.getElementById("type").value;
 let output=document.getElementById("output");

 if(type==="C"){
   output.innerHTML="F: "+((value*9/5)+32)+" | K: "+(value+273);
 }

 if(type==="F"){
   let c=(value-32)*5/9;
   output.innerHTML="C: "+c+" | K: "+(c+273);
 }

 if(type==="K"){
   let c=value-273;
   output.innerHTML="C: "+c+" | F: "+((c*9/5)+32);
 }
}
