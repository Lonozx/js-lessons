const pets = [
    {
      name: "Скоттиш фолд", // Порода
      description: 'Золотой шотландский вислоухий кот ждет в гости кошечку для совместного времяпровождения. Одной встречи достаточно для получения красивого и здорового потомства. У полуторагодовалого',
      location: "Київ, Київська область",
      price: "4 500 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/4ZN2o7krAB7SsGcJjX93.webp'
    },
    {
      name: "Скоттиш фолд", // Порода
      description: 'Гарний ,охайний котик. Привчений до лотка,їсть сухий корм. Любить гратися. Котику майже 4 місяці.( В подарунок 2 лоточка для туалету.',
      location: "Київ, Київська область",
      price: "1 500 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/o4b5MCkz9QUV6sgVCPzV.webp'
    },
     {
      name: "Другая", // Порода
      description: 'Все вопросы обсуждаются в телефонном разговоре, а не в переписке. Большая просьба звонить с 10 до 20 часов.Елка - глазастая, красивая и яркая, но колкая, если хочешь прикоснуться. Елка из тех',
      location: "Київ, Київська область",
      price: "1 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/jKmG4ZOy05MmybPcazEl.webp'
    },
     {
      name: "Экзотическая короткошерстная", // Порода
      description: 'Великолепный малыш Экзот, 2 месяца Лоток и когтеточку знает без проблем. Очень ласковый и нежная мальчик. Питание : сухой корм премиум класса и натуралка. Больше фото и видео вышлю в',
      location: "Київ, Київська область",
      price: "5000 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/WZ0RZ4x6GQ2VUENFTPrm.webp'
    },
     {
      name: "Экзотическая короткошерстная", // Порода
      description: 'Экзотический мальчик медвежульного типа) Упитанный и классный! С отличным костяком Чистокровный, обучен лотку Пишите в вайбер вышлю больше фото, видео',
      location: "Київ, Київська область",
      price: "1300 грн",
      url: 'https://d1opu7v3g3cdvy.cloudfront.net/213x160/iV8s1E5lPpU7wdJIAO7K.webp'
    },
    
  ]
  let petsEnter = document.querySelector('.pets__container');
  pets.map((item)=>{
   addElement(item.name, item.url, 
                   item.price, item.description, 
                   item.location);
  })
  
  function addMor(){
    petsEnter.innerHTML +=
    pets.map((item=>{
        addElement(item.name, item.url, 
                        item.price, item.description, 
                        item.location);
       }))
}

    
  let sort = document.querySelector('.sort');
  let refresh = document.querySelector('.refresh');
  let inp = document.querySelector('.classicSearch');
  let btnS = document.querySelector('.btnCSearch');
  let addMore = document.querySelector('.addMore');
  addMore.addEventListener('click', addMor);
  function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  
  function sorted(){
//    const result = pets.price.sort();
   
    console.log(pets.price);
  }
  sorted();
  sort.onclick = () => {
    petsEnter.innerHTML = '';
  //    pets.map((item=>{
  //       item.sort(addElement(item.name, item.url, 
  //                  item.price, item.description, 
  //                  item.location))
        
  //    }))
  }
  refresh.onclick = () =>{
    petsEnter.innerHTML = '';
    pets.map((item)=>{
   addElement(item.name, item.url, 
                   item.price, item.description, 
                   item.location);
  })
  }
  

  function funS(){
     petsEnter.innerHTML = '';
    pets.map((item=>{
      if(item.name === inp.value){
        // && toString(finds).toLowerCase().includes(item.name)
        addElement(item.name, item.url, 
                   item.price, item.description, 
                   item.location);
        console.log('fun exted')
      }
    }))
    inp.value = '';
     console.log('funnon');
  }
  btnS.addEventListener('click', funS);
  
  function addElement(name, url, price, description, location){
     const div = document.createElement('div');
     div.setAttribute('class', 'pets__item');
    const h3 = document.createElement('h3');
     h3.setAttribute('class', 'pets__name');
    h3.innerHTML = name;
    const img = document.createElement('img');
     img.setAttribute('class', 'pets__img');
    img.setAttribute('src', url);
    img.innerHTML = url;
    const divprice = document.createElement('div');
     divprice.setAttribute('class', 'pets__price');
    divprice.innerHTML = price;
     const p = document.createElement('p');
     p.setAttribute('class', 'pets__description');
    p.innerHTML = description;
     const h5 = document.createElement('h5');
     h5.setAttribute('class', 'pets__loc');
    h5.innerHTML = location;
    
     petsEnter.append(div);
     div.append(h3, img, img, divprice, p, h5);
    
  }
  
  // <div class="pets__item"> 
  //       <h3 class="pets__name">${pet.name}</h3>
  //       <img class="pets__img" src="${pet.url}" alt="">
  //       <div class="pets__price">${pet.price}</div>
  //       <p class="pets__description">${pet.description}</p>
  //       <h5 class="pets__loc">${pet.location}</h5>
  //     </div>