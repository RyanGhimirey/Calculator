const display = document.getElementById("display");

function appendToDisplay(input){
    if (display.value != "Error"){
        display.value += input;
    }
    else{
        alert("Clear display first!")
    }
    

}

function calculate(){

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    

}

function clearDisplay(){
    display.value = "";

}