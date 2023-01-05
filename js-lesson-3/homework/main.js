<<<<<<< HEAD
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let inp1 = document.querySelector('.input-1');
let btn = document.querySelector('.btn-out');
let out = document.querySelector('.output');
let winner = document.querySelector('.winner');

btn.onclick = () => {
    switch(inp1){
        case "Камінь": out.innerHTML=inp1.value;
        break;
        default: out.innerHTML=inp1.value + 'hol';
    }
   
=======
let input1 = document.querySelector('.input-1');
let button = document.querySelector('.btn-rps');
let compute = document.querySelector('.compute');
let user = document.querySelector('.user');

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

button.onclick = () => {
    // compute.getRandomInt(4);
    switch(input1.value){
        case 1: user.innerHTML = "Rock"; break;
        case 2: user.innerHTML = "Paper"; break;
        case 3: user.value = "Scissors"; break;
        case 4: user.value = "Water"; break;
        default: console.log('Theres an issue');
    }
    // if(){

    // }
>>>>>>> 908cb8528fb6286de1b075ecb49cab659ccc817e
}