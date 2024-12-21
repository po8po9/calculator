function operator (expression){

    let firstNumberREG = /^[.0-9.]*/;
    let firstOperandREG = /[\+\-\/\*]{1}/;
    let checkOperandsREG = /[\+\-\/\*]{2,}/;
    let secondNumberREG = /[.0-9.]*$/;

    let firstNumber = expression.match(firstNumberREG);
    let firstOperand =  expression.match(firstOperandREG);
    let checkOperand = expression.match (checkOperandsREG);

    let secondNumber = expression.match (secondNumberREG);
    console.log (firstNumber);
    console.log (firstOperand);
    console.log (secondNumber)
    
    if (checkOperand) {console.log ("more than one operand present")}
    let resultOperation;

    switch (firstOperand[0]){
    case '+':
	resultOperation = parseFloat(firstNumber) + parseFloat(secondNumber);
	break;
    case '*':
	resultOperation = parseFloat(firstNumber) * parseFloat(secondNumber);
	break;
    case '/':
	resultOperation = parseFloat(firstNumber) / parseFloat(secondNumber);
	break;
    case '-':
	resultOperation = parseFloat(firstNumber) - parseFloat(secondNumber);
	break;

    }

    
    return resultOperation;
}
    //find first expression before operand (+ - / *
