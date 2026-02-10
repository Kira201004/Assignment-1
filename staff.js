var dataSet=[
["Brielle Williamson","Integration Specialist","New York","4804","2012/12/02","$372,000"],
["Herrod Chandler","Sales Assistant","San Francisco","9608","2012/08/06","$137,500"],
["Rhona Davidson","Integration Specialist","Tokyo","6200","2010/10/14","$327,900"],
["Colleen Hurst","Javascript Developer","San Francisco","2360","2009/09/15","$205,500"],
["Sonya Frost","Software Engineer","Edinburgh","1667","2008/12/13","$103,600"]
];

let nameAsc=true;
let salaryAsc=true;

function displayStaff(){
 let table=document.getElementById("staffTable");
 table.innerHTML="";

 dataSet.forEach(row=>{
   table.innerHTML+=`
   <tr>
     <td>${row[0]}</td>
     <td>${row[1]}</td>
     <td>${row[2]}</td>
     <td>${row[3]}</td>
     <td>${row[4]}</td>
     <td>${row[5]}</td>
   </tr>`;
 });
}

displayStaff();

function sortName(){
 dataSet.sort((a,b)=> nameAsc?a[0].localeCompare(b[0]):b[0].localeCompare(a[0]));
 nameAsc=!nameAsc;
 displayStaff();
}

function sortSalary(){
 dataSet.sort((a,b)=>{
   let salA=parseInt(a[5].replace(/[$,]/g,""));
   let salB=parseInt(b[5].replace(/[$,]/g,""));
   return salaryAsc?salA-salB:salB-salA;
 });
 salaryAsc=!salaryAsc;
 displayStaff();
}
