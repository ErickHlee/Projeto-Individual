const lamb = document.getElementById("idOvelha");
const wolf = document.getElementById("idLobo");

window.onscroll = function () { changePosition() };

function changePosition() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        lamb.style.position = 'fixed';
        wolf.style.position = 'fixed';
    }
}
