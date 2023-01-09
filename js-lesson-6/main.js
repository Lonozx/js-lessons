const user = {
    name: 'Sasha',
    age: 18,
    isLogin: true,
    phone: {
        ios: 'IPhone',
        android: 'Samsung'
    }
}

delete user.age;
user.country = 'Ukraine';
user.name = 'Mykhailo';
user.country = 'mi';
console.log(user.phone);
console.log(user);

let today = new Date();