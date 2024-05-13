const display = document.getElementById("display");

function appendToDisplay(input) {
    const lastChar = display.value.slice(-1); 
    
    if ((input === "+" || input === "-" || input === "*" || input === "/") && (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")) {
        return;
    }
    display.value += input;
    resizeFont();
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1); 
    resizeFont();
}

function clearDisplay() {
    display.value = "";
    resizeFont();
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
    resizeFont();
}

function resizeFont() {
    const length = display.value.length;
    let fontSize = 5; // Initial font size
    if (length > 10) {
        fontSize = 4; // Resize font if content length exceeds 10 characters
    }
    if (length > 15) {
        fontSize = 3; // Resize font if content length exceeds 15 characters
    }
    if (length > 20) {
        fontSize = 2; // Resize font if content length exceeds 20 characters
    }
    display.style.fontSize = fontSize + "rem";
}
