const display = document.getElementById('display');

function insert(input) {
    display.value += input;
}

function clearDisplay() {  
    display.value = '';
}
function Del() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erreur';
        setTimeout(clearDisplay, 1500);
    }
}
function toggleSign() {
    display.value = -display.value;
}