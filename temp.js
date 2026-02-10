// I created a function called convertTemp
function convertTemp(){

 // I used document.getElementById to read the user’s input
 // I used parseFloat to convert it into a number because temperature can include decimals
 let value=parseFloat(document.getElementById("tempValue").value);

 // Get the selected temperature type from the dropdown menu
 let type=document.getElementById("type").value;

 // Get the area where the converted result will be displayed
 let output=document.getElementById("output");

 // If the user selects Celsius, the program converts it into Fahrenheit and Kelvin using formulas
 if(type==="C"){
   output.innerHTML="F: "+((value*9/5)+32)+" | K: "+(value+273);
 }

 // If the user selects Fahrenheit, it converts it into Celsius and Kelvin
 if(type==="F"){
   let c=(value-32)*5/9;
   output.innerHTML="C: "+c+" | K: "+(c+273);
 }

 // If the user selects Kelvin, it converts it into Celsius and Fahrenheit
 if(type==="K"){
   let c=value-273;
   output.innerHTML="C: "+c+" | F: "+((c*9/5)+32);
 }
}
