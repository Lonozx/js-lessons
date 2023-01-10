let out = document.querySelector('.out');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');
let out4 = document.querySelector('.out4');
let out5 = document.querySelector('.out5');
let out6 = document.querySelector('.out6');
let riders = document.querySelector('.rider');
let inputW = document.querySelector('.inp-wid');
let addButton = document.querySelector('.Add');
let checkButton = document.querySelector('.check');
let widButton = document.querySelector('.wid');
let timeSetter = document.querySelector('.timeSetter');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let select = document.querySelector('.creative');
let floatButton = document.querySelector('.float');
let floatInput1 = document.querySelector('.float1');
let floatInput2 = document.querySelector('.float2');
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

let timeSpace = {
    hours: 24,
    minutes: 60,
    seconds: 60,
    display: function(){
        out5.innerHTML = timeSpace.hours + ':' + timeSpace.minutes + ':' + timeSpace.seconds;
    },
    hoursChange: function(x){
        if(x<=24){
        this.hours = x;
        console.log(x);
        console.log(this.hours);
    }
        else {this.hours=x-24;}
        return this.hours;
    },
    minutesChange: function(x){
        if(x<60){this.minutes = x;
        } else if(x>60){
            this.hours++;
        }
        if(this.minutes==0){
            this.minutes+='0';
        }
        return this.minutes;
    },
    secondsChange: function(x){
        if(x<60){this.seconds = x;
        } else if(x>60){
            this.minutes++;
        }
        if(this.seconds==0){
            this.seconds+='0';
        }
        return this.seconds;
    },
}
timeSpace.display();

timeSetter.onclick = () =>{
    if(hours.value!=0 && minutes.value!=0 && seconds.value!=0){
   let a =  timeSpace.hoursChange(hours.value);
   let b = timeSpace.minutesChange(minutes.value);
   let c = timeSpace.secondsChange(seconds.value);
   out5.innerHTML = a + ':' + b + ':' + c;
} 
else out5.innerHTML = '<b>Please enter whole numbuz!</b>';
    hours.value='';
    minutes.value='';
    seconds.value='';
}

let floatin = {
    upper: 1.4,
    down: 1.6,
    summary: function(x, y){
        this.upper = x;
        this.down = y;
        return x+y;
    },
    minus: function(x, y){
        this.upper = x;
        this.down = y;
        return x-y;
    },
    multi: function(x, y){
        this.upper = x;
        this.down = y;
        return x*y;
    },
    division: function(x, y){
        this.upper = x;
        this.down = y;
        return x/y;
    },
    divisionExe: function(x, y){
        this.upper = x;
        this.down = y;
        return x%y;
    },
}
    select.onchange = () =>{
    let summary = floatin.summary(+floatInput1.value, +floatInput2.value);
    let minus = floatin.minus(floatInput1, floatInput2);
    let multi = floatin.multi(floatInput1, floatInput2);
    let division = floatin.division(floatInput1, floatInput2);
    let divisionExe = floatin.divisionExe(floatInput1, floatInput2);
    if(select.onchange){
    switch(select.value){
        case '+': out6.innerHTML = +summary; break;
        case '-': minus; break;
        case '*': multi; break;
        case '/': division; break;
        case '%': divisionExe; break;
        default: out6.innerHTML = 'DFA';
    }
}
    floatInput1.value='';
    floatInput2.value='';
    }

  
