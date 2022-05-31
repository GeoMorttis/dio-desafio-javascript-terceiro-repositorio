var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var button_soma = document.getElementsByName('adicionar')[0]
button_soma.addEventListener('click', increment)

var button_menos = document.getElementsByName('subtrair')[0]
button_menos.addEventListener('click', decrement)

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber === 10) {
        button_soma.disabled = true;
        button_menos.disabled = false;
    }
    else {
        button_soma.disabled = false;
        button_menos.disabled = false;
    }
    if (currentNumber > 0) {
        currentNumberWrapper.style.color = 'black';
        currentNumberWrapper.style.fontWeight = 'bold';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber === -10) {
        button_menos.disabled = true;
        button_soma.disabled = false;
    }
    else {
        button_menos.disabled = false;
        button_soma.disabled = false;
    }
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
        currentNumberWrapper.style.fontWeight = 'bold';
    }
}