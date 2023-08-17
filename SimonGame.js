let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "beige"] 

let started = false;
let level = 0;
let h2 = document.querySelector("h2")

document.addEventListener("keypress",function(){
    if (started == false){
        console.log("game started")
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function ()  {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function ()  {
        btn.classList.remove("userflash");
    }, 300);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random button chosen
    let randomIndex = Math.floor(Math.random()*4);
    let randomColor = btns[randomIndex];
    let randomButton = document.querySelector(`.${randomColor}`);
    // console.log(randomButton);
    // console.log(randomColor);
    // console.log(randomIndex);
    gameSeq.push(randomColor);
    console.log(gameSeq);

   
    gameFlash(randomButton);
}

function checkAns(index){
    //console.log("current level", level);
    if(userSeq[index] === gameSeq[index]){
        //console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1500);
        }
    }else{
        h2.innerHTML = `Game Over. <b>Your score was ${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white"
            
        }, 200);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
































