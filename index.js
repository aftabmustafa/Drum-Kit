// Number of Drums
var numberOfDrums = document.querySelectorAll(".drum").length;

//Attaching event listener on all buttons for mouse click
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

// Attaching event listener for keyboard press

document.addEventListener("keypress", function(event) {
  var keyboardKeyPress = event.key;
  makeSound(keyboardKeyPress);
  buttonAnimation(keyboardKeyPress);
});

//Play sound on keypress or mouse click
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log("Sorry, NO sounds available");
  }
}

function buttonAnimation(letter) {
  var animatingButtons = document.querySelector("." + letter);
  animatingButtons.classList.add("pressed");

  setTimeout(function() {
    animatingButtons.classList.remove("pressed");
  }, 100);
}
