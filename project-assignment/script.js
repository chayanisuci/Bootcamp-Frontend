const calculator = {
    displayNum :'0',
    operator : null,
    firstNum : null,
    operasi : false,
}

function updateDisplay(){
    const display = document.querySelector('.display');
    display.innerText = calculator.displayNum;
}

function clear(){
    calculator.displayNum ='0';
    calculator.operator = null;
    calculator.firstNum = null;
    calculator.operasi = false;
}

function input(digit){
    if(calculator.displayNum === '0'){
        if(digit === '.'){
            calculator.displayNum = '0.';
        } else {
            calculator.displayNum = digit;
        }
        
    } else {
        calculator.displayNum += digit;
    }
}

function operasi(operator){
    if(!calculator.operasi){
        calculator.operator = operator;
        calculator.firstNum = calculator.displayNum;
        calculator.displayNum = '0';
        calculator.operasi = true;
    } else {
        alert('Operator sudah ditetapkan');
    }
}

function calculate(op){
    if(op == '+'){
        calculator.displayNum = parseFloat(calculator.firstNum) + parseFloat(calculator.displayNum);
    }else if(op == '-'){
        calculator.displayNum = parseFloat(calculator.firstNum) - parseFloat(calculator.displayNum);
    }
    else if(op == '*'){
        calculator.displayNum = parseFloat(calculator.firstNum) * parseFloat(calculator.displayNum);
    }
    else if(op == '/'){
        calculator.displayNum = parseFloat(calculator.firstNum) / parseFloat(calculator.displayNum);
    }
    updateDisplay();
}

const buttons = document.querySelectorAll('.keypad .numpad');
console.log(buttons);
for(let btn of buttons){
    btn.addEventListener('click', function(e){
        //clear
        if(e.target.classList.contains('clear')){
            clear();
            updateDisplay();
            return;
        }
        //invers
        if(e.target.classList.contains('invers')){
            calculator.displayNum *= -1;
            updateDisplay();
            return;
        }
        //delete
        if(e.target.classList.contains('del')){
            const del = calculator.displayNum.length -1;
            if(del == 0){
                calculator.displayNum = '0';
            } else {
                calculator.displayNum = calculator.displayNum.substr(0, del);
            }
            updateDisplay();
            return;
        }
        //persen
        if(e.target.classList.contains('persen')){
            calculator.displayNum /= 100 ;
            updateDisplay();
            return;
        }
        //operator
        if(e.target.classList.contains('operator')){
            operasi(e.target.innerText);
            return;
        }
        //hasil
        if(e.target.classList.contains('hasil')){
            calculate(calculator.operator);
            clear();
            return;
        }



        input(e.target.innerText);
        updateDisplay();
    })
}