var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      // ternary statement, wil run like an if statement and is shorter to write
      this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
      // if (this.textContent === "Easy") {
      //   numSquares = 3;
      // } else {
      //   numSquares = 6;
      // }
      reset();
      // figure out how many squares to show
      // pick new colors
      // pick new pickedColor
      // update page to reflect changes
    })
  }
}

function setUpSquares() {
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
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick ne random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = 'steelblue';
  resetButton.textContent = 'New Colors';
}
// var easyBtn = document.querySelector('#easyBtn');
// var hardBtn = document.querySelector('#hardBtn');
//
// easyBtn.addEventListener('click', function(){
//   easyBtn.classList.add('selected');
//   hardBtn.classList.remove('selected');
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   messageDisplay.textContent = "";
//   resetButton.textContent = 'New Colors';
//   for (var i = 0; i < squares.length; i++) {
//     // we take advantage of 3 generated random colors
//     // loops thru array and if there are colors displayed on a following square run code below
//     if (colors[i]) {
//         squares[i].style.backgroundColor = colors[i]
//     } else {
//       squares[i].style.display = 'none';
//     }
//   }
// });
//
// hardBtn.addEventListener('click', function(){
//   easyBtn.classList.remove('selected');
//   hardBtn.classList.add('selected');
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   messageDisplay.textContent = "";
//   resetButton.textContent = 'New Colors';
//   for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i]
//       squares[i].style.display = 'block';
//     }
// });
//
resetButton.addEventListener('click', function(){
  reset();
})

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
