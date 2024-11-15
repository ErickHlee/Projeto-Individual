const lamb = document.getElementById("idOvelha"),
    wolf = document.getElementById("idLobo"),
    text = document.getElementById("idHistoria");


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    lamb.style.marginTop = value * -0.5 + 'px';
    wolf.style.marginTop = value * -0.5 + 'px';
    // text.style.marginRight = value * -2.5 + 'px';
});

// Pegue o class `.next`
let next = document.querySelector('.next'),
    prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

document.body.style.height = window.innerHeight + 'px'
