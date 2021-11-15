document.getElementById('menu').addEventListener('mouseenter', hoverOver);
document.getElementById('menu').addEventListener('mouseleave', hoverOut);

function hoverOver() {
    document.getElementById('dropDown').classList.toggle('open');
}

function hoverOut() {
    document.getElementById('dropDown').classList.remove('open');
}