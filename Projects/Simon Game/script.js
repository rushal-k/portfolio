let buttonColors=["red","blue","green","yellow","purple","orange"];
let gamePattern=[];
let userPattern=[];
let level=0;
let started=false;
document.addEventListener("keydown",function(){
    if (!started){
        started=true;
        nextSequence();
    }
})
function nextSequence(){
    userPattern=[];
    level++;
    document.querySelector("h1").innerText="Level "+level;
    let randomNumber=Math.floor(Math.random()*6);
    let randomColor=buttonColors[randomNumber];
    gamePattern.push(randomColor);
    playSound(randomColor);
    animatePress(randomColor);
}
let buttons=document.querySelectorAll(".btn");
buttons.forEach(function(btn){
    btn.addEventListener("click",function(){
        let userColor=this.id;
        userPattern.push(userColor);
        playSound(userColor);
        animatePress(userColor);
        checkAnswer(userPattern.length-1);
    });
});
function checkAnswer(currentIndex){
    if(userPattern[currentIndex] === gamePattern[currentIndex]){
        if(userPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    } else {
        gameover();
    }

}
function gameover(){
    document.body.classList.add("game-over");
    setTimeout(function (){
        document.body.classList.remove("game-over");
    },200);
    document.getElementById("level-title").innerText="Game Over,Press any key to restart";
    resetGame();
}
function resetGame(){
    level=0;
    gamePattern=[];
    userPattern=[];
    started=false;
}
function animatePress(color){

  let btn = document.getElementById(color);

  btn.classList.add("flash");

  setTimeout(function(){
    btn.classList.remove("flash");
  },300);
}
function playSound(color){
    let audio=new Audio("Sounds/"+color+".mp3");
    audio.play()
}
document.querySelector("button").addEventListener("click",function(){
    startgame();
});
function startgame(){
    resetGame();
    started=true;
    nextSequence();
}