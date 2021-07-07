let btnValue = document.getElementsByClassName('btn-value');
let btnOperator = document.getElementsByClassName('btn-operator');
let display = document.getElementById('display');
let displayVal = 0;
let pendingVal;
let calArr = [];

for (i=0; i < btnValue.length; i++){
    btnValue[i].addEventListener('click', getBtnValue)
}

for (i=0; i < btnOperator.length; i++){
    btnOperator[i].addEventListener('click', getOperatorValue)
}

function getBtnValue(e) {
    let numText = e.target.textContent;
    
    if (displayVal === 0){
       displayVal = ''
    }

    displayVal += numText;
    display.textContent = displayVal
}

function getOperatorValue(e) {
    let opText = e.target.textContent;
    
    switch(opText){
        case '+' :
            pendingVal = displayVal;
            displayVal = "+";
            display.textContent = displayVal;
            if (displayVal = '+'){
                displayVal = ''
            }
            calArr.push(pendingVal);
            calArr.push('+');
            console.log(calArr)
            break;
        case '-' :
            pendingVal = displayVal;
            displayVal = "-";
            display.textContent = displayVal;
            if (displayVal = '-'){
                displayVal = ''
            }
            calArr.push(pendingVal);
            calArr.push('-');
            console.log(calArr)
            break;
        case '*' :
          pendingVal = displayVal;
          displayVal = "*";
          display.textContent = displayVal;
          if (displayVal = '*'){
              displayVal = ''
          }
          calArr.push(pendingVal);
          calArr.push('*');
          console.log(calArr)
          break;
        case '/' :
            pendingVal = displayVal;
            displayVal = "/";
            display.textContent = displayVal;
            if (displayVal = '/'){
                displayVal = ''
            }
            calArr.push(pendingVal);
            calArr.push('/');
            console.log(calArr)
            break;
        case '.' :
                displayVal += '.'
                display.textContent = displayVal;
                break;
        case 'AC' :
                displayVal = 0
                calArr = []
                display.textContent = displayVal;
                break;
        case '=' :
               calArr.push(pendingVal);
               let calculate = eval(calArr.join(''));
               displayVal = calculate;
               display.textContent = displayVal; 
               displayVal = 0; 
               calArr = [];
                break;
    }
}