let inpage = document.querySelector('.input-age');
let btnage = document.querySelector('.count-btn');
let outage = document.querySelector('.out-age');
let clear = document.querySelector('.clear');

btnage.onclick = () => {
    if(+inpage.value>=0 && +inpage.value<=11){
        outage.innerHTML = 'Ви ще дитина';
    } else if(+inpage.value>=12 && +inpage.value<=17){
        outage.innerHTML = 'Ви підліток';}
        else if(+inpage.value>=18 && +inpage.value<=59){
            outage.innerHTML = 'Ви доросла людина';}
            else if(+inpage.value>=60){
                outage.innerHTML = 'Ви вже пенсіонер';}
                else outage.innerHTML = 'Введені неправильні дані.';
}

clear.onclick = () => {
    document.querySelector('span').innerHTML = '';
    document.querySelector('input').value = '';
}

let inpsign = document.querySelector('.input-sign');
let btnsign = document.querySelector('.sign-btn');
let outsign = document.querySelector('.out-sign');

btnsign.onclick = () => {
    switch(+inpsign.value){
        case 0: outsign.innerHTML = ')';
        break;
        case 1: outsign.innerHTML = '!';
        break;
        case 2: outsign.innerHTML = '@';
        break;
        case 3: outsign.innerHTML = '#';
        break;
        case 4: outsign.innerHTML = '$';
        break;
        case 5: outsign.innerHTML = '%';
        break;
        case 6: outsign.innerHTML = '^';
        break;
        case 7: outsign.innerHTML = '&';
        break;
        case 8: outsign.innerHTML = '*';
        break;
        case 9: outsign.innerHTML = '(';
        break;
        default: console.log('Go FYS'); 
    }
}

let inpdial = document.querySelector('.input-dial');
let inpdial2 = document.querySelector('.input-dial2');
let btndial = document.querySelector('.dial-btn');
let outdial = document.querySelector('.out-dial');
let result = 0;
btndial.onclick = () => {
    outdial.innerHTML = '';
    for(let i= +inpdial.value; i<= +inpdial2.value;i++){
        result+=i;
    }
    outdial.innerHTML += result;
}

let inpdigit = document.querySelector('.input-digit');
let inpdigit2 = document.querySelector('.input-digit2');
let btndigit = document.querySelector('.digit-btn');
let outdigit = document.querySelector('.out-digit');

btndigit.onclick = () => {
    if(+inpdigit.value > +inpdigit2.value){
        inpdigit.value = +inpdigit.value - +inpdigit2.value;
        outdigit.innerHTML = inpdigit.value;
    } else {
        inpdigit2.value = +inpdigit2.value - +inpdigit.value;
        outdigit.innerHTML = inpdigit2.value;
    }
}

let inpdev = document.querySelector('.input-dev');
let outdev = document.querySelector('.out-dev');
let btndev = document.querySelector('.dev-btn');

btndev.onclick = () => {
    let n = 0;
    while(n < +inpdev.value){
        n++;
        +inpdev.value%+inpdev.value==0;
        outdev.innerHTML = +inpdev.value;
    }
}