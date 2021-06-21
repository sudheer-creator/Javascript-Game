console.log("This is script .js");
let audio =new Audio('audio.mp3');
setTimeout(() => {
    audio.play();
    
}, 1000);
let audiogo=new Audio('audiogo.mp3');
let score=0;
let cross=true;


let dino = document.querySelector(".dino");

    document.onkeydown = function (e) {
        // console.log("Key code is----------------" + e.keyCode);
        if (e.keyCode == 38) {
            console.log("it is running");
            dino.classList.add('animateDino');

            setTimeout(() => {
                dino.classList.remove('animateDino');
            }, 2000);
        }
        else if(e.keyCode==39){
           dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
           dino.style.left=112+dinoX+"px";
        }
        else if(e.keyCode==37){
            dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=dinoX-112+"px";
        }
    }
setInterval(() => {

    let dino = document.querySelector(".dino");
    let gameover = document.querySelector(".gameover");
    let dangerous = document.querySelector(".dangerous");

    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));

    ox = parseInt(window.getComputedStyle(dangerous, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(dangerous, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY);

    if (offsetX < 110 && offsetY < 52) {
        console.log("Game over case is running");
        dangerous.classList.remove('animateDangerous');
        gameover.innerHTML="<h1>Game Over</h1><h6>Reload to Play Again</h6>";
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);

    }
    else if(cross&&offsetX<140){
        score=score+1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            let aniDura=parseFloat(window.getComputedStyle(dangerous,null).getPropertyValue('animation-duration'));
            let newAniDura=aniDura-0.1;
            dangerous.style.animationDuration=newAniDura+'s';
            console.log('newAniDura',newAniDura);
        }, 500);



    }


}, 100);
function updateScore(score){
let yourscore=document.querySelector('.yourscore');
yourscore.innerHTML='Your score:'+score;
}
