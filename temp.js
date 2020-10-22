"use strict";
//When temp is input into field, value is converted

//define Convert and Clear Buttons
document.getElementById('convert').onclick=tempConvert;
document.getElementById('clearForm').onclick=clearForm;

//define converstion function

function tempConvert(){

    var fahrenheit=
    document.getElementById("fahrenheit").value;

    var celsius=
    document.getElementById("celsius").value;


if (fahrenheit !=""){
    celsius = (parseFloat(fahrenheit)-32)/1.8;
    } else {
        fahrenheit=(parseFloat(celsius)* 1.8)+32;
    } 
    

 document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
 
 document.getElementById('celsius').value= parseFloat(celsius).toFixed(1);
}

//define clear function
function clearForm(){ 

    document.getElementById('fahrenheit').value='';

    document.getElementById('celsius').value='';
}







