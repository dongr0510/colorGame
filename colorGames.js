var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",function(){
    // generate all new colors
    colors = generateRandomColors(6);
    // pick a new random colors
    pickedColor = pickColor();
    // change color display
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares

    squares[i].addEventListener("click", function(){

        // grad color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    })
}

function changeColors(color){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make array
    var arr = []
    // add num random colors to array
    for(var i = 0; i < num; i++){
        // get random color
        arr.push(randomColors());

    }
    return arr;
}

function randomColors(){
    // pick a red from 0-255
    // pick a green from 0-255
    // pick a blue from 0-255
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    // "rgb(r, g, b)"
    return "rgb("+ r + ", " + g + ", " + b + ")";
}