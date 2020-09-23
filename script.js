const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
const keys = [];
const player = {
    x: 200,
    y: 200,
    width: 633,
    height: 476,
    speed: 4,
    moving: false,
    score:0
}

const background = new Image();
background.src = "download.png";
const apple = new Image();
apple.src = "apple.png";
const pokemon = new Image();
pokemon.src = "pokemon.png";
const pokeball = new Image();
pokeball.src = "pokeball.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

var arr = []

setInterval(function(){
    for(var i= 0 ; i<10 ; i++){
        arr[i] = Math.random() * (692 - 32) + 32
    }
},5000)

function animate() {
    ctx.font = "30px Arial";
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(pokemon, 0, 0, 633, 476,player.x, player.y, 56,58);
    ctx.drawImage(pokeball,0,0,982,1006,arr[0],arr[1],30,30)
    ctx.drawImage(pokeball,0,0,982,1006,arr[2],arr[3],30,30)
    ctx.drawImage(pokeball,0,0,982,1006,arr[4],arr[5],30,30)
    ctx.drawImage(pokeball,0,0,982,1006,arr[6],arr[7],30,30)
    ctx.drawImage(pokeball,0,0,982,1006,arr[8],arr[9],30,30)
    ctx.fillText("SCORE : " + player.score, 10, 50);
    movePlayer()
    pos()
    requestAnimationFrame(animate);
}


animate();

window.addEventListener('keydown', function (e) {
    keys[e.keyCode] = true;
    player.moving = true;
});

window.addEventListener('keyup', function (e) {
    delete keys[e.keyCode];
    player.moving = false;
});

function movePlayer() {
    //up
    if (keys[38] && player.y >0 ) {
        player.y -= player.speed;
    }
    //left
    if (keys[37] && player.x > 0) {
        player.x -= player.speed;
    }
    //down
    if (keys[40] && player.y < canvas.height - 60 ) {
        player.y += player.speed;
    }
    //right
    if (keys[39] && player.x < canvas.width - 65) {
        player.x += player.speed;
    }
}

// score count 

function rangex(start, end , val) {
    if(start<=val && val<=end){
        return true;
    }else{
        return false;
    }
}

function rangey(start, end , val) {
    if(start<=val && val<=end){
        return true;
    }else{
        return false;
    }
}

function pos(){

    console.log("arr[0]" + " "+arr[0])
    console.log("arr[1]" + " "+arr[1])
    console.log("player x" + " "+player.x)
    console.log("player y" + " "+player.y)

    if( rangex(arr[0]-20 , arr[0]+20 , player.x) && rangey(arr[1]-20 , arr[1]+20, player.y))
    {
        console.log("yes")
        player.score++;
    }

    if( rangex(arr[2]-20 , arr[2]+20 , player.x) && rangey(arr[3]-20 , arr[3]+20, player.y))
    {
        console.log("yes")
        player.score++;
    }

    if( rangex(arr[4]-20 , arr[4]+20 , player.x) && rangey(arr[5]-20 , arr[5]+20, player.y))
    {
        console.log("yes")
        player.score++;
    }

    if( rangex(arr[6]-20 , arr[6]+20 , player.x) && rangey(arr[7]-20 , arr[7]+20, player.y))
    {
        console.log("yes")
        player.score++;
    }

    if( rangex(arr[8]-20 , arr[8]+20 , player.x) && rangey(arr[9]-20 , arr[9]+20, player.y))
    {
        console.log("yes")
        player.score++;
    }
  
   
}