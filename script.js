let display = document.getElementById("display");
let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");


function Display(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearAll() {
    display.value = "";
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

