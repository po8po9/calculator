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
clearButton.addEventListener ('click', () => {
    displayInput.textContent="";
    buttonDisable(numButtons, 0);
})
//undo button
undoButton.addEventListener('click', ()=>{
    let lastChar = displayInput.textContent[displayInput.textContent.length -1];
    displayInput.textContent=displayInput.textContent.replace(lastChar, '');
    buttonDisable(numButtons, 0);
 });
//Transistion End Listener for all buttons
allButtons.forEach ((allbutton) =>{
    addEventListener('transitionend', (allbutton) => {
	 if (event.target.className == 'clicked') return;
	 event.target.classList.remove('clicked');
    });
});


//Number Listeners
numButtons.forEach(numButton=>{
     numButton.addEventListener ('click', () =>{
	 if (displayInput.textContent.length>=10){
	     buttonDisable(numButtons, 1);
	     return;
	     }
	 displayInput.textContent = displayInput.textContent + numButton.textContent;
	 numButton.classList.add('clicked');
     });
});
//Click transition for function buttons
funcButtons.forEach(funcButton=>{
     funcButton.addEventListener ('click', () =>{	 
         funcButton.classList.add('clicked');
     });
});

//this in new branch
