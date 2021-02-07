class Game{
    constructor(){

    }
getGameState(){

    var gameStateref = database.ref("gameState");
    gameStateref.on("value", function(data){
        gameState = data.val();
    })

    }
updateGameState(state){
    var gameStateref = database.ref("/");
    gameStateref.update({
        gameState : state
    });
}
start(){
    if(gameState === 0){
        player = new Player();
        player.getPlayerCount();
        form = new Form();
        form.display();
    }
    car1 = createSprite(300, 300, 20, 20);
    car1.addImage(car1Image)

    car2 = createSprite(300, 400, 20, 20);
    car2.addImage(car2Image)

    carsArray = [car1, car2]
}
play(){
    image(backImg, 0, -displayHeight*4, displayWidth, displayHeight*5)
    form.hide();
    text("LeaderBoard", 200, 200)
    Player.getAllPlayersInfo();
    if(allPlayers !== undefined){
        var posY = 300;
        var posX = 300;
        var i = 0;
        for(var plr in allPlayers){
            /*text(allPlayers[plr].playerName+":"+ allPlayers[plr].playerPosition, 250, posY)
            posY = posY + 50;*/

            carsArray[i].x = posX;
            carsArray[i].y = displayHeight-allPlayers[plr].playerPosition;
            camera.position.x = displayWidth/2;
            camera.position.y = carsArray[i].y

            if(plr === "player"+ player.index){
                fill(255)
                ellipse(carsArray[i].x, carsArray[i].y, 70, 70)
            }
            
            i = i+1;
            posX = posX + 300;
        }
    }
    if((keyIsDown("w")||keyIsDown("W")||keyIsDown(87)||keyIsDown(119)) && player.index !== 0){
        player.position = player.position + 20;
        player.updatePlayerInfo();
    }
    drawSprites();
}
}