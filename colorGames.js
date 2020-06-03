var numSquares = 9;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
    for(var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            modeButton[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else if (this.textContent === "Medium"){
                numSquares = 6;
            } else {
                numSquares = 9;
            }
    
            reset();
            // figure out how many squares to show
            // pick new colors
            // pick a new pickedColor
            // update page to relfect changes
        })
    }
    
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

    reset();
    
}

for(var i = 0; i < modeButton.length; i++){
    modeButton[i].addEventListener("click", function(){
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        modeButton[2].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy"){
            numSquares = 3;
        } else if (this.textContent === "Medium"){
            numSquares = 6;
        } else {
            numSquares = 9;
        }

        reset();
        // figure out how many squares to show
        // pick new colors
        // pick a new pickedColor
        // update page to relfect changes
    })
} 

function reset(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random colors
    pickedColor = pickColor();
    // change color display
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    h1.style.backgroundColor = "steelblue";
}
}


resetButton.addEventListener("click",function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random colors
    pickedColor = pickColor();
    // change color display
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = ""
})

colorDisplay.textContent = pickedColor;

// for(var i = 0; i < squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     // add click listeners to squares

//     squares[i].addEventListener("click", function(){

//         // grad color of clicked square
//         var clickedColor = this.style.backgroundColor;
//         // compare color to pickedColor
//         if(clickedColor === pickedColor){
//             messageDisplay.textContent = "Correct!";
//             resetButton.textContent = "Play Again?"
//             changeColors(clickedColor);
//             h1.style.backgroundColor = clickedColor;
//         } else {
//             this.style.backgroundColor = "#232323";
//             messageDisplay.textContent = "Try Again"
//         }
//     })
// }

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



// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     // change color display
//     colorDisplay.textContent = pickedColor;

//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     // change color display
//     colorDisplay.textContent = pickedColor;

//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];

//             squares[i].style.display = "block";
//     }
// })