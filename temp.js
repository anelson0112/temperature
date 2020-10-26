"use strict";
//When temp is input into field, value is converted

//define Convert and Clear Buttons
document.getElementById('convert').onclick=tempConvert;
document.getElementById('clearForm').onclick=clearForm;

//define converstion function

function tempConvert(){
//define variables for each temp
    var fahrenheit=
    document.getElementById("fahrenheit").value;

    var celsius=
    document.getElementById("celsius").value;

    var kelvin= 
    document.getElementById("kelvin").value;    
//first part of function if temp is entered in F
if (fahrenheit !=""){ 
    kelvin=((parseFloat(fahrenheit)-32)*5/9)+273.15;
    celsius = (parseFloat(fahrenheit)-32)/1.8;
    
 //second part of function if temp is entered in C
} else if (kelvin !=""){
    celsius=(parseFloat(kelvin)-273.15);
    fahrenheit=((parseFloat(kelvin)-273.15)*9/5)+32;
}
//third part of function if temp is entered in K
else {
        fahrenheit=(parseFloat(celsius)* 1.8)+32;
        kelvin=(parseFloat(celsius)+273.15);
    }

    
//call to have number returned with decimals
 document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
 
 document.getElementById('celsius').value= parseFloat(celsius).toFixed(1);
 
 document.getElementById('kelvin').value = parseFloat(kelvin).toFixed(2);
 
}


//define clear function
function clearForm(){ 

    document.getElementById('fahrenheit').value='';

    document.getElementById('celsius').value='';

    document.getElementById('kelvin').value='';
}







