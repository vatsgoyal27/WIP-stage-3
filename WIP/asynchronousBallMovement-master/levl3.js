class levl3{
    constructor(){
        
    }
    display(){
        target.x = 570;
        target.y = 275;

        collide(player, ground7);
        collide(player, ground8);

        ground1.x = 20000;
        ground2.x = 20000;
        ground3.x = 20000;

        ground4.x = 200000;
        ground5.x = 200000;
        ground6.x = 200000;

        ground7.x = 100;
        ground7.y = 300;
        for(var i = 0; i <= 1; i++){
            ground8.x = 240;
            ground8.y = 300;
        }
        if(gameState == 3){
            ground8.velocityY = 2;
        }

        if (keyDown("space") && player.y > 270){
            player.velocityY = -20;
        }

        if(collide(player, ground7) && playerColor !== "blue"){
            player.x = 40000;
        }

    }

}