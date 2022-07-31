let num1 = document.querySelector('#num1-el');
const num2 = document.querySelector('#num2-el');
const sum = document.querySelector('#sum-el');
sum.innerHTML = 'Let`s to some calculations'  
let Add = () => {
     sum.innerHTML =  parseInt(num1.value) +  parseInt(num2.value); 
}

let sub = () => {
    sum.innerHTML = parseInt(num1.value) -  parseInt(num2.value); 
}

let div = () => {
 sum.innerHTML = parseInt(num1.value) /  parseInt(num2.value); 
}
let mul = () => {
    sum.innerHTML = parseInt(num1.value) *  parseInt(num2.value); 
}

Add();
sub();
div();
mul();

