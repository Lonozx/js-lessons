// 1 ex 
let float_1 = 0.1;
let float_2 = 0.2;
console.log(float_1 + float_2);

// 2 ex
let string = '1';
let num = 2;
console.log(string + num);

// 3 ex 
let flash = prompt('Enter the size of a flashdrive (in GB):');
flash *= 1000;
alert((flash/820) + ' files can be stored.');

// 4 ex
let cash = prompt('How much cash do you have?');
let choc = prompt('How much does the chocolate cost?');
let elsecash = (cash/choc);
alert('You have ' + (cash/choc) + ' chocolate plates.');
alert('And you have ' + (cash%elsecash));

// 5 ex
let number = prompt('Enter the 3-section number:');
let numberTone = number;
let sum = 0;
while(numberTone > 0){
let first = numberTone%10;
sum = (sum * 10) + first;
numberTone = parseInt(numberTone/10);
}
alert('Your number mirrored ' + sum);

// 6 ex
let cashier = prompt('Enter summary: ');
let per = prompt('Enter the persantage: ');
per /= 100;
let result = cashier*per;
let lastone = +cashier + +result;
alert('Cash with persent - '+ lastone);

// 7 ex
// false 
// true 
// false

// Extended 

let sizeHDD = document.querySelector('.input-1').value;
sizeHDD *= 1000;
const file = 820;
let but = document.querySelector('button').onclick = () => {
    let out = document.querySelector('span').innerHTML = Math.round (sizeHDD/file) + ' count of files is stored';
    console.log(out);
    let par = document.querySelector('p').innerHTML = sizeHDD%file + 'MB left';
}
