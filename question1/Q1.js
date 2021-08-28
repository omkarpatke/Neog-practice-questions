const input1 = document.querySelector('#a');
const input2 = document.querySelector('#b');
const Add = document.querySelector('.add');
const Minus = document.querySelector('.minus');
const Multi = document.querySelector('.multi');
const Division = document.querySelector('.division');
const OutputDiv =document.querySelector('.output');


Add.addEventListener('click' , () => {
    const Input1 = input1.value;
    const Input2 = input2.value;
    const result = Number(Input1) + Number(Input2);
     OutputDiv.innerText = 'the addition is ' + result;
})
Minus.addEventListener('click' , () => {
    const Input1 = input1.value;
    const Input2 = input2.value;
    const result = Number(Input1) - Number(Input2);
     OutputDiv.innerText = 'the substraction is ' + result;
})
Multi.addEventListener('click' , () => {
    const Input1 = input1.value;
    const Input2 = input2.value;
    const result = Number(Input1) * Number(Input2);
     OutputDiv.innerText = 'the multiplication is ' + result;
})
Division.addEventListener('click' , () => {
    const Input1 = input1.value;
    const Input2 = input2.value;
    const result = Number(Input1) / Number(Input2);
     OutputDiv.innerText = 'the Division is ' + result;
})