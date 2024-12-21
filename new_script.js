const displayResult = document.querySelector ('#result');
const displayInput= document.querySelector ('#input');
const nonActionButtons = document.querySelectorAll ('.nonAction-button');
const allButtons = document.querySelectorAll ('button');
const clearButton = document.querySelector ('#clear');
const undoButton = document.querySelector ('#undo');
const MAXLEN = 10;



//Adding listeners
function addListenerList (selector, event, handler){
    let listElements = document.querySelectorAll (`${selector}`);
    for (element of listElements){
	element.addEventListener (event, handler);
    }
}

function handleActionButtons (){
    let expression = getCurrentDisplay();
    let  result = operator(expression);
    //if (result==null){ 
    clear ();
    updateDisplay (result); 

}

function handleNonActionButtons (clickedObject){ //handles buttons for which no calculation will take place

    let objectValue = clickedObject.target.getAttribute ('data-value');
    updateDisplay (objectValue); 
    checkLength ();
}





function keyhandler (pressedKey){ //handles buttons for which no calculation will take place

    let objectValue = pressedKey.key;
    console.log(typeof(objectValue));
    try {


	let newV=parseFloat(objectValue);
    }catch (err) {
	return
    };
    //if (!(typeof(objectValue) != float)){return};
    console.log (newV);
    updateDisplay (objectValue); 
    checkLength ();
}

//Disables Buttons for certain length. Flag to indicate activation
function buttonDisable(Buttons, flag){
    let decideIfDisable = flag == 1 ? true : false;
    Buttons.forEach (Button => Button.disabled= decideIfDisable);    

    if (flag){
	Buttons.forEach(Button => Button.classList.add("disabled"));
    }else{
	Buttons.forEach(Button => Button.classList.remove ("disabled"));
    }
}
//AC button
function clear (){
    displayResult.textContent="";
    buttonDisable(nonActionButtons, 0);
};
[]
//undo button
function undo (){

    let currentDisplay = getCurrentDisplay();
    let length = currentDisplay.length;
    let lastChar = currentDisplay[length -1];

    let newValue = currentDisplay.replace(lastChar, ''); //erases and then clears screen and updates
    clear();
    updateDisplay (newValue);    
    buttonDisable(nonActionButtons, 0);
;
};
//Display------

let checkLength = () => {if (getCurrentDisplay().length >= MAXLEN) buttonDisable (nonActionButtons, 1);}

let getCurrentDisplay = () => displayResult.textContent; //returns current display as a string

function updateDisplay (newValue){ //passes newValue to Display - no calculation only upddate!
    newValue = getCurrentDisplay()  + newValue;
    displayResult.textContent = newValue;
}

//main


window.addEventListener ('keydown' , keyhandler)
addListenerList ('.nonAction-button', 'click', handleNonActionButtons);
addListenerList ('#undo', 'click', undo);
addListenerList ('#clear', 'click', clear);
addListenerList ('#equal', 'click', handleActionButtons);




//this is new branch modified
