let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let totalEl = document.getElementById('total-el');

let counter = 0;
let newTotal = 0

function increment() {
    counter++
    countEl.textContent = counter;  
}


function save() {
    saveEl.textContent += counter + " +";

    let finalTotal;
    newTotal += counter;
    finalTotal = newTotal;
    totalEl.textContent = finalTotal;

    counter = 0;
    countEl.textContent = counter;
}