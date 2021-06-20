var i = document.querySelectorAll(".drum").length;
var track = 0;
while (track < i) {
  document
    .querySelectorAll(".drum")
    [track].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      detectSound(buttonInnerHTML);
      keyFlash(buttonInnerHTML);
      keyColorChange(buttonInnerHTML);
    });
  track++;
}

document.addEventListener("keydown", function (event) {
  detectSound(event.key);
  keyFlash(event.key);
  keyColorChange(event.key);
});

function detectSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}

function keyFlash (currentKey){
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  },150);
}
function keyColorChange (currentKey){
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.toggle("click-white");
  setTimeout(function(){
    activeKey.classList.remove("click-white");
  },150);
  
}