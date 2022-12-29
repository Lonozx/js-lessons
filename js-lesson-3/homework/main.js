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
}