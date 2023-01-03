//If else

let age = 45;

// if(age >= 18 && age <= 25){
//     console.log('Призовна служба');
// } else if(age >= 25 && age <= 55){
//     console.log('Контракт');
// } else{
//     console.log('Не годен');
// }

let userAge = document.querySelector('.userAge');
let out = document.querySelector('.out-1');
let button = document.querySelector('.enter').onclick = () =>{
    if(userAge.value >= 18 && userAge.value <= 25){
        out.innerHTML = "Призовна служба";
    } else if(userAge.value >= 25 && userAge.value <= 55){
        out.innerHTML = "Контрактна служба";
    } else{
        out.innerHTML = "Не годен";
    }
};