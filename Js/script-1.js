/*---- CONSTANT DECLARATION -----*/

const canvas = document.getElementById("mCanvas");
const ctx = canvas.getContext("2d");


let x = 100;
let y = 100;

let bLeft, bUp, bRight, bDown;

let framesPerSecond = 1000/120;


/*--------FUNCTIONS--------*/

function drawRect(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function move(){
    if(bLeft){
        x--;
    }
    if(bUp){
        y--;
    }
    if(bRight){
        x++;
    }
    if(bDown){
        y++;
    }
}


canvas.addEventListener('keydown', function(e){
    let codes = e.keyCode;
    if(codes === 37){
        bLeft = true;
    }
    if(codes === 38){
        bUp = true;
    }
    if(codes === 39){
        bRight = true;
    }
    if(codes === 40){
        bDown = true;
    }
});

canvas.addEventListener('keyup', function(e){
    let codes = e.keyCode;
    if(codes === 37){
        bLeft = false;
    }
    if(codes === 38){
        bUp = false;
    }
    if(codes === 39){
        bRight = false;
    }
    if(codes === 40){
        bDown = false;
    }
});



setInterval(function(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    move();
    drawRect(x, y, 50, 50, "#fff");
}, framesPerSecond);
