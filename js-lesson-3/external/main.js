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
   
}