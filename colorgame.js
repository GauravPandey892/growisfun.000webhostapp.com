var numsquares = 6;
var colors = generateRandomColors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numsquares = 3;
  colors = generateRandomColors(numsquares);
  pickedColor = pickColor();

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) squares[i].style.backgroundColor = colors[i];
    else {
      squares[i].style.display = "none";
    }
  }

  colorDisplay.textContent = pickedColor;
});

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numsquares = 6;
  colors = generateRandomColors(numsquares);
  pickedColor = pickColor();

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }

  colorDisplay.textContent = pickedColor;
});

resetButton.addEventListener("click", function() {
  //   generate all  new colors
  colors = generateRandomColors(numsquares);
  //   pick a new random color form array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change colors from array

  this.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to sqaures
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked square
    var clickedcolor = this.style.backgroundColor;
    if (clickedcolor == pickedColor) {
      h1.style.backgroundColor = clickedcolor;
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again";
      changeColor(pickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

function changeColor(color) {
  //loop through all squares and change color to given color
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
function generateRandomColors(num) {
  // Make an array
  var arr = [];
  // add num random colors to aarray
  for (var i = 0; i < num; i++) {
    arr[i] = randomcolor();
  }
  // return that array
  return arr;
}
function randomcolor() {
  // pick a 3 colors from 0 to 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
