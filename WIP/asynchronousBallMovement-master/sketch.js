var playerlevel1, playerlevel2, playerlevel3;
var player, playerColor;
var target;
var gameState;

var ground1, ground2, ground3;
var ground4, ground5, ground6;

function setup(){ 
    createCanvas(600, 600);

    player = createSprite(50, 100, 20, 20);
    player.shapeColor = "blue";
    playerColor = "blue";
    target = createSprite(4000, 260, 15, 15);
    target.shapeColor = "green"

    ground1 = createSprite(100, 300, 200, 30);
    ground1.shapeColor = "blue";
    ground2 = createSprite(300, 300, 200, 30);
    ground2.shapeColor = "red";
    ground3 = createSprite(500, 300, 200, 30);
    ground3.shapeColor = "yellow";
    ground4 = createSprite(100, 300, 180, 30);
    ground4.shapeColor = "blue";
    ground5 = createSprite(300, 280, 180, 30);
    ground5.shapeColor = "red";
    ground6 = createSprite(500, 260, 180, 30);
    ground6.shapeColor = "yellow";
    ground7 = createSprite(300, 280, 180, 30);
    ground7.shapeColor = "blue";
    ground8 = createSprite(249, 301, 40, 30);
    ground8.shapeColor = "red";
    
    gameState = 1;

    playerlevel1 = new levl1();
    playerlevel2 = new levl2();
    playerlevel3 = new levl3();
}
function draw(){ 

    background("black");
    console.log(mouseY);
    console.log(mouseX + "x");
    console.log(gameState);

    player.velocityY = player.velocityY+ 2;


    if(keyDown(68)){
        player.x = player.x + 3;
    }

    if(keyDown(65)){
        player.x = player.x - 3;

    }
    
    

    if(keyDown(50)){
        player.shapeColor = "red";
        playerColor = "red";

    }
    if(keyDown(49)){
        player.shapeColor = "blue";
        playerColor = "blue";

    }
    if(keyDown(51)){
        player.shapeColor = "yellow";
        playerColor = "yellow";

    }
    if (collide(player, target)){
        gameState = gameState + 1;
        player.x = 50;
        player.y = 100;
        player.shapeColor = "blue";
        playerColor = "blue";
        

    }
    if (gameState == 1){
        playerlevel1.display();
        
    }
    if (gameState == 2){
        playerlevel2.display();
    }
    if (gameState == 3){
        playerlevel3.display();
    }
     
     collide(player, target);
    drawSprites(); 

} 

