const lamb = document.getElementById("idOvelha"),
    wolf = document.getElementById("idLobo"),
    text = document.getElementById("idHistoria");


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    lamb.style.marginTop = value * -0.5 + 'px';
    wolf.style.marginTop = value * -0.5 + 'px';
    // text.style.marginRight = value * -2.5 + 'px';
});
