"use strict";

window.onload = function() {
    const estimateCostBtn = document.getElementById("estimate");
    estimateCostBtn.onclick = estimateTotalCost; 
}

function estimateTotalCost(){
    //get and convert the values to numeric form
    const getDays = Number(document.getElementById("rentingDays").value);   //convert the value into number then millies
    const returnRental = document.getElementById("carRentalCost");
    const returnSurcharge = document.getElementById("25surcharge");
    const returnOptions = document.getElementById("optionsTax");
    const returnTotal = document.getElementById("totalDue"); //after running if statements and calculations, return the total cost

    let allDaysPrice = getDays * 29.99; //basic car renta;
    let optionsTax = 0; //adding tax based on what's checked; days multiplied by tax/day; to
    let surchargeTax;   //find the tax and store it, then add it to the total after
    
    //give OPTIONS section an if statement for checked values, add to options variable
    if(document.getElementById("electronic").checked){
        let x = 3.95 * getDays;//tax per day, the result is the tax for this checkbox ONLY
        optionsTax += x; //add to total options tax  
    }

    //since both gps and roadside have the same tax per day value, I used the && operator
    if(document.getElementById("gps").checked && document.getElementById("roadside").checked){
        let x = (2.95*2) * getDays; //(tax per day) multiplied by renting days, results the total tax for BOTH roadside AND gps
        optionsTax += x;    //add to total options tax
    }
    //if either gps OR roadside is checked
    else if(document.getElementById("gps").checked || document.getElementById("roadside").checked){
        let x = 2.95 * getDays; //result is the total tax for this checkbox ONLY; add to total tax and totalprice
        optionsTax += x;    //add to the total options tax
    }

    //add surcharge for <25 using check property; always results to true 
    if(document.getElementById("yes").checked){
        surchargeTax = allDaysPrice * 0.3;
    }
    else{
        surchargeTax = 0;
    }
    let totalCost = allDaysPrice + surchargeTax + optionsTax;
    //display the three seperate costs and then total using inner.html 
    returnRental.innerHTML = `$${allDaysPrice.toFixed(2)}`;
    returnOptions.innerHTML = `$${optionsTax.toFixed(2)}`;
    returnSurcharge.innerHTML =  `$${surchargeTax.toFixed(2)}`;
    returnTotal.innerHTML =  `$${totalCost.toFixed(2)}`;

    
    
}