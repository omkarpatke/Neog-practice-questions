const Input = document.querySelector('.input');
const h1Btn = document.querySelector('.h1');
const h2Btn = document.querySelector('.h2');
const h3Btn = document.querySelector('.h3');
var OutputDiv = document.querySelector('.output');
var Para = document.querySelector('.para');

function addInput(){
    var InputValue = Input.value ; 
    OutputDiv.innerText = InputValue;
}

h1Btn.addEventListener('click' , () => {
    var InputValue = Input.value;
    var newDiv = document.createElement('h1');
    newDiv.innerText = InputValue;
    document.body.appendChild(newDiv);
})

h2Btn.addEventListener('click' , () => {
    var InputValue = Input.value;
    var newDiv = document.createElement('h2');
    newDiv.innerText = InputValue;
    document.body.appendChild(newDiv);
})

h3Btn.addEventListener('click' , () => {
    var InputValue = Input.value;
    var newDiv = document.createElement('h3');
    newDiv.innerText = InputValue;
    document.body.appendChild(newDiv);
})