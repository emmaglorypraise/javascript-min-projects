// Connects HTML DOM
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let totalEl = document.getElementById('total-el');

//new variables to hold number of people
let count = 0;

// stores the old values
let newCount = 0;

// triggered when increment button is clicked and changes initial value
function increment() {
    count +=  1 ;
    countEl.textContent = count;
}

// triggered when save button is clicked
function save() {
    
    let countStr = count + ' + ';
    

    let totalEnteries;
    newCount += count;
    totalEnteries = newCount;

    totalEl.textContent = totalEnteries
    saveEl.textContent += countStr;

    // resets when save button is clicked
    countEl.textContent = 0;
    count = 0;

}

