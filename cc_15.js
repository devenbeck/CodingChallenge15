//Task 1- After html setup, select the riskDashboard container 
//And print "Risk Dashboard Loaded" to the console

document.addEventListener('DOMContentLoaded', function(){
    console.log("Risk Dashboard Loaded");
})

//Task 2 - Adding risk items dynamically
function addRiskItem(riskName, riskLevel, Department) {
    if(!(riskName != null && riskName.trim() != '')){
        alert('Risk name can not be empty');
        return;
    }
    if(!(riskLevel != null && riskLevel.trim() != '')){
        alert('Risk Level can not be empty');
        return;
    }
   if (!(Department != null && department.trim() != '')){
    alert('Department can not be empty');
    return;
   }
   let divRiskDashboard = document.getElementById('riskCards')
   const riskCard = document.createElement ('div');
   riskCard.setAttribute('class', 'risk-card')
   const rName = document.createElement('h2');
   rName.setAttribute('class', 'risk-name');
   rName.textContent = riskName;
   riskCard.append(rName);
   
const rLevel = document.createElement('p');
    rLevel.setAttribute('class', 'risk-level');
    rLevel.textContent = `Risk Level: ${riskLevel}`;
    riskCard.append(rLevel);

    
const dept = document.createElement('p');
    dept.setAttribute('class', 'department');
    dept.textContent = `Department: ${Department}`;
    riskCard.append(dept);
}
document.addEventListener('DOMContentLoaded', function (){
    addRiskItem("Data Breach", "High", "IT");
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");
})
