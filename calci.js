const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input === 'AC') {
        clearDisplay(); // Clear the display for 'AC'
    } else if (input === '<-') {
        deleteLastCharacter(); // Remove the last character for '←'
    } else if (input === '=') {
        calculate(); // Perform calculation for '='
    } else {
        display.value += input; // Append other input values
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1); // Remove the last character
}

function calculate() {
    try {
        display.value = eval(display.value); // Safely evaluate the expression
    } catch (error) {
        display.value = "Error"; // Handle invalid input
    }
}
