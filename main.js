const img = document.querySelector('img');
function okay() {
    img.src = "꽃길.png";
    show()
}
function not() {
    img.src = "잡앗다요놈.jpg"
    show()
}
function show() {
    img.style.display = 'block';
}