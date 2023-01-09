let but = document.querySelector('button');

function test(alp) {
    console.log(alp);
}

but.onclick = () => {
    test('Goooooo');
}