const lamb = document.getElementById("idOvelha"),
    wolf = document.getElementById("idLobo"),
    text = document.getElementById("idHistoria");


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    lamb.style.marginTop = value * -1.25 + 'px';
    wolf.style.marginTop = value * -1.25 + 'px';
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

// Variável para armazenar o ícone atualmente selecionado
const passiva = document.getElementById("text_passive");
const Q = document.getElementById("text_q");
const W = document.getElementById("text_w");
const E = document.getElementById("text_e");
const R = document.getElementById("text_r");

const img_passiva = document.getElementById("img_passive");
const img_q = document.getElementById("img_Q");
const img_w = document.getElementById("img_W");
const img_e = document.getElementById("img_E");
const img_r = document.getElementById("img_R");


function showPassiveText() {

    if (passiva.style.display == 'block') {
        passiva.style.display = 'none';

        img_q.style.display = 'block';
        img_w.style.display = 'block';
        img_e.style.display = 'block';
        img_r.style.display = 'block';
    } else {
        passiva.style.display = 'block';

        img_q.style.display = 'none';
        img_w.style.display = 'none';
        img_e.style.display = 'none';
        img_r.style.display = 'none';
    }
}

function showQText() {
    if (Q.style.display == 'block') {
        Q.style.display = 'none';

        img_passiva.style.display = 'block';
        img_w.style.display = 'block';
        img_e.style.display = 'block';
        img_r.style.display = 'block';
    } else {
        Q.style.display = 'block';


        img_passiva.style.display = 'none';
        img_w.style.display = 'none';
        img_e.style.display = 'none';
        img_r.style.display = 'none';
    }
}

function showWText() {
    if (W.style.display == 'block') {
        W.style.display = 'none';

        img_passiva.style.display = 'block';
        img_q.style.display = 'block';
        img_e.style.display = 'block';
        img_r.style.display = 'block';
    } else {
        W.style.display = 'block';

        img_passiva.style.display = 'none';
        img_q.style.display = 'none';
        img_e.style.display = 'none';
        img_r.style.display = 'none';
    }
}

function showEText() {
    if (E.style.display == 'block') {
        E.style.display = 'none';

        img_passiva.style.display = 'block';
        img_q.style.display = 'block';
        img_w.style.display = 'block';
        img_r.style.display = 'block';
    } else {
        E.style.display = 'block';

        img_passiva.style.display = 'none';
        img_q.style.display = 'none';
        img_w.style.display = 'none';
        img_r.style.display = 'none';
    }
}

function showRText() {
    if (R.style.display == 'block') {
        R.style.display = 'none';

        img_passiva.style.display = 'block';
        img_q.style.display = 'block';
        img_w.style.display = 'block';
        img_e.style.display = 'block';
    } else {
        R.style.display = 'block';

        img_passiva.style.display = 'none';
        img_q.style.display = 'none';
        img_w.style.display = 'none';
        img_e.style.display = 'none';
    }
}
