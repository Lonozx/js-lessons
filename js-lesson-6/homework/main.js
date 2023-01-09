let out = document.querySelector('.out');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');
let out4 = document.querySelector('.out4');
let riders = document.querySelector('.rider');
let inputW = document.querySelector('.inp-wid');
let addButton = document.querySelector('.Add');
let checkButton = document.querySelector('.check');
let widButton = document.querySelector('.wid');
let car = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 1999,
    everageS: 50,
    fuel: 40,
    consumption: 6,
    riders: 'Polya',
    info: function(){
        return `Manufacturer is ${this.manufacturer} <br>
        Model is ${this.model} of ${this.year} year`;
    },
    addRider: function(x){
       this.riders +=' ' + x + ' ';
    },
    check: function(x){
       for(let key in car){
        if(x==car[key].riders){
            return x;
        }
       }
    },
    count: function(x){
        let t=0;
        let fue=0;
            t=x/car.everageS;
            fue=(x*car.consumption)/100;
        if(t%4==0){
            t++;
        }
        return t +' hours spend. '+ ' And fuel grasp is ' + fue;
    }
    
}

out.innerHTML = car.info();
addButton.onclick = () => {
    car.addRider(riders.value);
    riders.value = '';
    out2.innerHTML = car.riders;
}

checkButton.onclick = () => {
    car.check(riders.value);
    out3.innerHTML = car.riders + ' CHECKED';
    
}

widButton.onclick = () => {
    let a = car.count(inputW.value);
    out4.innerHTML = a;
}