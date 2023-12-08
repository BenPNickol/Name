function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(squareId){
var sqaure = document.getElementById(squareId);
var randomColor = getRandomColor();
sqaure.style.backgroundColor = randomColor;
}

function flashColors(){
    var s = document.getElementsByClassName('.grid');
    s.appendChild(flashes);
    var flashes = document.querySelectorAll(".flash");
    var randomColor = getRandomColor();
    flashes.forEach(randomColor);
    function randomColor(){
        setInterval('100');
    }
}