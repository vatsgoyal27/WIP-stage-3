class levl1{
    constructor(){


    }
    display(){
        target.x = 570;
        target.y = 275;

        collide(player, ground1);
        collide(player, ground2);
        collide(player, ground3);

        ground4.x = 200000;
        ground5.x = 200000;
        ground6.x = 200000;
        ground7.x = 2000000;
        ground8.y = 2000000;

        if (keyDown("space") && player.y > 270){
            player.velocityY = -20;
        }
        if(collide(player, ground1) && playerColor !== "blue"){
            player.x = 40000;
        }
        if(collide(player, ground2) && playerColor !== "red"){
            player.x = 40000;
        }
        if(collide(player, ground3) && playerColor !== "yellow"){
            player.x = 40000;
        }

    }

}