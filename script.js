const displayResult = document.querySelector ('#result');
const displayInput= document.querySelector ('#input');
const numButtons = document.querySelectorAll ('.number-button');
const funcButtons = document.querySelectorAll ('.func-button');
const allButtons = document.querySelectorAll ('button');
const clearButton = document.querySelector ('#clear');
const undoButton = document.querySelector ('#undo');
const operationObjects=[];

//Disables numButtons for certain length. Flag to indicate activation
function buttonDisable(numButtons, flag){
    if (flag==1){
	numButtons.forEach(numButton =>numButton.disabled=true);
	console.log('Length not supported');
    }else{
	numButtons.forEach(numButton =>numButton.disabled=false);
    }
}
//AC button
function clear (){
    displayInput.textContent="";
    buttonDisable(numButtons, 0);
};
//undo button
function undo (){
    let lastChar = displayInput.textContent[displayInput.textContent.length -1];
    displayInput.textContent=displayInput.textContent.replace(lastChar, '');
    buttonDisable(numButtons, 0);
};
//Transistion End Listener for all buttons
function transEnd (allbutton){
    addEventListener('transitionend', (allbutton) => {
	 if (event.target.className == 'clicked') return;
	 event.target.classList.remove('clicked');	
    });
    if (displayInput.textContent.length>=10){
	buttonDisable(numButtons, 1);
	return;
    }
};

function addListenerList (selector, event, fn){
    let list = document.querySelectorAll (`${selector}`);
    for (item of list){
	item.addEventListener (event, fn);
    }
}
function handleNumbers (element){
    let current = displayInput.textContent;
    displayInput.textContent = current + element.target.getAttribute('data-num');
    element.target.classList.add('clicked'); 
}
addListenerList ('.number-button', 'click', handleNumbers);
addListenerList ('button', 'click', transEnd);
addListenerList ('#undo', 'click', undo);
addListenerList ('#clear', 'click', clear);




//this is new branch
