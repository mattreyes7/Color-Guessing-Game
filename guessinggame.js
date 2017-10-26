var numSquares = 6

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function(){
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    // we take advantage of 3 generated random colors
    // loops thru array and if there are colors displayed on a following square run code below
    if (colors[i]) {
        squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardBtn.addEventListener('click', function(){
  easyBtn.classList.remove('selected');
  hardBtn.classList.add('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
      squares[i].style.display = 'block';
    }
});

resetButton.addEventListener('click', function(){
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick ne random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = 'steelblue';
  resetButton.textContent = 'New Colors';
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners
  squares[i].addEventListener('click', function(){
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!';
      resetButton.textContent = 'Play Again?';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again!';
    }
  })
}

function changeColors(color){
  // loop thru all squares
  // change color of square to match correct color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  // pick random number between the number of squares displayed and make that assigned color to be guessed
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    // get random colors
    // push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  // pick r from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick g from 0-255
  var g = Math.floor(Math.random() * 256);
  // pick b from 0-255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";

}
