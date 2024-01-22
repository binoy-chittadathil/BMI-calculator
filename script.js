let inputHeight=document.getElementById('inputHeight');
let inputWeight=document.getElementById('inputWeight');
let calculatedBMI=document.getElementById('calculatedBMI');
let clearButton=document.getElementById('clearBtn');
let roundedBmi;

function findBmi(){
    let height=inputHeight.value;
    let weight=inputWeight.value;
    let bmi=weight/(height*height);
    roundedBmi= Math.round(bmi * 100) / 100;
    calculatedBMI.innerHTML=roundedBmi
}

function clear(){
    roundedBmi='00';
    inputHeight.value=''
    inputWeight.value=''
    calculatedBMI.innerHTML=roundedBmi;
}

clearButton.addEventListener('click', clear);
