const Text = document.querySelector('.text');
const IncreseBtn = document.querySelector('.incresebtn');
const DecreseBtn = document.querySelector('.decresebtn');
const Input = document.querySelector('.input');


function addText(){
  var InputValue= Input.value;
  Text.innerText = InputValue;
}


 var fontsize = 17;
IncreseBtn.addEventListener('click',() =>{
   
  fontsize = fontsize + 2;
  Text.style.fontSize = `${fontsize}px`;
 
})

DecreseBtn.addEventListener('click',() =>{
  fontsize = fontsize - 2;
  Text.style.fontSize = `${fontsize}px`;
 
})