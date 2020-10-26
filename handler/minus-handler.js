function minusLogic (input1, input2) {  

    if (typeof input1 !== 'number') {throw new TypeError('input1');}
    if (typeof input2 !== 'number') {throw new TypeError('input2');}     

    const result = input1 - input2;

    if(typeof result !== 'number') {throw new TypeError('result');}

    return result;
}

function minusHandler() {
    debugger;

    const userInput1 = document.getElementById("first-input").value;
    const userInput2 = document.getElementById("second-input").value;
    
    let lastResult;

    if((isNaN(userInput1) ===true) || (isNaN(userInput2) === true)){
        alert('Please enter a number');
        return;
    } else {

        lastResult = minusLogic(Number(userInput1), Number(userInput2));
    }
    
    alert(lastResult);
}