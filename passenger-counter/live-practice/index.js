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


let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,
    isAdmin: true       // by key "age" store value 30
};

// alert( user.name ); // John
// alert( user.age );

user.isAdmin = true;

// alert( user.isAdmin );

delete user.age;

let User = {};

// set
User["likes birds"] = true;

// get
alert(User["likes birds"]); // true

// delete
delete User["likes birds"];
  