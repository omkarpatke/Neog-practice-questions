const Input = document.querySelector('.input');
const redbtn = document.querySelector('.red');
const bluebtn = document.querySelector('.blue');
const greenbtn = document.querySelector('.green');
const OutputDiv = document.querySelector('.output');


function addText(){
var  InputValue = Input.value ;
OutputDiv.innerHTML = InputValue;
}

redbtn.addEventListener('click' , () => {
    OutputDiv.style.color = 'red';
})

bluebtn.addEventListener('click' , () => {
    OutputDiv.style.color = 'blue';
})

greenbtn.addEventListener('click' , () => {
    OutputDiv.style.color = 'green';
})