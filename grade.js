// Function to convert a student's mark into a letter grade
function convertGrade(){

 // Get the value entered by the user from the input box
 let mark = document.getElementById("markInput").value;

 // Convert the input from text into a number for comparison
 let num = parseInt(mark);

 // Get the elements where result and validation messages will appear
 let result = document.getElementById("result");
 let validation = document.getElementById("validation");

 // Clear previous results before showing new output
 result.innerHTML = "";
 validation.innerHTML = "";

 // Check if the input is not a number
 if(isNaN(num)){
   validation.innerHTML = "Enter a valid number.";
   return; // stop the function if invalid
 }

 // Check if the mark is negative
 if(num < 0){
   validation.innerHTML = "Mark cannot be negative.";
   return;
 }

 // Check if the mark is greater than 100
 if(num > 100){
   validation.innerHTML = "Mark cannot exceed 100.";
   return;
 }

 // Variable to store the final grade
 let grade;

 // Use conditions to assign grade based on mark range
 if(num >= 90) grade = "A";
 else if(num >= 80) grade = "B";
 else if(num >= 70) grade = "C";
 else if(num >= 60) grade = "D";
 else if(num >= 50) grade = "E";
 else grade = "F";

 // Display the final grade result on the webpage
 result.innerHTML = "Grade: " + grade;
}
