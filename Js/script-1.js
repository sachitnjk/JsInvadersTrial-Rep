/*---- CONSTANT DECLARATION -----*/

const canvas = document.getElementById("mCanvas");
const ctx = canvas.getContext("2d");


const player = {
    x: 100,
    y: 100,
    width:50,
    height:50,
    color: "WHITE"
}

let bLeft, bUp, bRight, bDown;

let framesPerSecond = 1000/120;



/*--------FUNCTIONS--------*/

function drawRect(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawFunc(){
    drawRect(player.x, player.y, player.width, player.height, player.color);
}

function collision(player){
    player.top = player.y;
    player.bottom = player.y + player.height;
    player.left = player.x;
    player.right = player.x + player.width;

    if(player.left < 0){
        player.x++;
    }
    if(player.top < 0){
        player.y++;
    }
    if(player.right > canvas.width){
        player.x--;
    }
    if(player.bottom > canvas.height){
        player.y--;
    }
}

function move(){
    if(bLeft){
        player.x--;
    }
    if(bUp){
        player.y--;
    }
    if(bRight){
        player.x++;
    }
    if(bDown){
        player.y++;
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



function startGame(){
    setInterval(function(){
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        move();
        drawFunc();
        collision(player);
    }, framesPerSecond);   
}

startGame();
