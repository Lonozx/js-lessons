let users = [
    {
        name: 'Hugo 1',
        age: 11
    },
    {
        name: 'Hugo 2',
        age: 21
    },
    {
        name: 'Hugo 3',
        age: 25
    },
    {
        name: 'Hugo 4',
        age: 16
    },
    {
        name: 'Hugo 5',
        age: 14
    },
]
let out = document.querySelector('.out');
for(let i=0;i<users.length;i++){
    if(users[i].age > 18){
        console.log(users[i].name);
    }
}

//Упрощенный цикл как сверху
users.map((item, index)=>{
    if(item.age>18){
        out.innerHTML += `<h2> <span> ${index++} </span>${item.name}</h2> <br>`;
    }
});

//Finder
//Ищет первый
let finder = users.find((item, index)=>{
    return item.age == 16;
});
//Ищет все
let filter = users.filter((item, index)=>{
    return item.age == 16;
});
//Ищет индекс
let findIndex = users.findIndex((item, index)=>{
    return item.age == 16;
});

console.log(finder);
console.log(filter);
console.log(findIndex);