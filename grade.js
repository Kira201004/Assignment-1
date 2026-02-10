function convertGrade(){

 let mark=document.getElementById("markInput").value;
 let num=parseInt(mark);

 let result=document.getElementById("result");
 let validation=document.getElementById("validation");

 result.innerHTML="";
 validation.innerHTML="";

 if(isNaN(num)){
   validation.innerHTML="Enter a valid number.";
   return;
 }

 if(num<0){
   validation.innerHTML="Mark cannot be negative.";
   return;
 }

 if(num>100){
   validation.innerHTML="Mark cannot exceed 100.";
   return;
 }

 let grade;

 if(num>=90) grade="A";
 else if(num>=80) grade="B";
 else if(num>=70) grade="C";
 else if(num>=60) grade="D";
 else if(num>=50) grade="E";
 else grade="F";

 result.innerHTML="Grade: "+grade;
}
