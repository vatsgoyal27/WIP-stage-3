class levl2{
    constructor(){
        
    }
    display(){
        target.x = 570;
        target.y = 235;

        collide(player, ground4);
        collide(player, ground5);
        collide(player, ground6);

        ground1.x = 20000;
        ground2.x = 20000;
        ground3.x = 20000;

        ground4.x = 100;
        ground4.y = 300;
        ground5.x = 300;
        ground5.y = 280;
        ground6.x = 500;
        ground6.y = 260;

        ground7.x = 2000000;
        ground8.x = 2000000;

        if (keyDown("space") && player.x < 190){
            if (player.y > 270){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x > 210 && player.x < 390){
            if (player.y > 250){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x > 410){
            if (player.y > 230){
            player.velocityY = -20;
            }
        }


        if(collide(player, ground4) && playerColor !== "blue"){
            player.x = 40000;
        }
        if(collide(player, ground5) && playerColor !== "red"){
            player.x = 40000;
        }
        if(collide(player, ground6) && playerColor !== "yellow"){
            player.x = 40000;
        }

    }

}