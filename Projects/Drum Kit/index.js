// index.js

// SELECT ALL BUTTONS
let buttons = document.querySelectorAll(".drum");

// CLICK EVENT (FIXED)
buttons.forEach(function(btn){
  btn.addEventListener("click", function(){
    let key = this.innerText.toLowerCase(); // ✅ FIX
    if("wasdjkl".includes(key)){
        playSound(key);
        buttonAnimation(key);
    } 
  });
});

// KEYBOARD EVENT
document.addEventListener("keydown", function(event){
  let key = event.key.toLowerCase();
  if("wasdjkl".includes(key)){
    playSound(key);
    buttonAnimation(key);
  } // (small improvement)
});

// FUNCTION → PLAY SOUND
function playSound(key){

  switch(key){
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("sounds/snare.mp3").play();
      break;

    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    case "l":
      new Audio("sounds/crash.mp3").play();
      break;

    default:
      console.log("Invalid key");
  }
}

// FUNCTION → ANIMATION
function buttonAnimation(key){

  let activeBtn = document.querySelector("." + key);

  if(activeBtn){
    activeBtn.classList.add("pressed");

    setTimeout(function(){
      activeBtn.classList.remove("pressed");
    }, 100);
  }
}