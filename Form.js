class Form{
    constructor(){
        this.title = createElement('h1')
        this.input_box = createInput("name")
        this.button = createButton("Next")
        this.greeting = createElement("h3")
        this.button1 = createButton("Reset")

    }
display(){

    this.title.html("Player's Profile")
    this.title.position(200, 200)

    this.input_box.position(300, 300)

    this.button.position(350, 350)

    this.button1.position(1200, 100)

    this.button.mousePressed(()=>{
        this.input_box.hide();
        this.button.hide();

        playerCount = playerCount + 1;
        player.index = playerCount;
        player.updatePlayerCount(playerCount)

        player.name = this.input_box.value();
        player.updatePlayerInfo(player.name);

        this.greeting.html("HELLO "+ player.name)
        this.greeting.position(300, 300)
        
    });

    this.button1.mousePressed(()=>{
        game.updateGameState(0);
        player.updatePlayerCount(0);
        var playersref = database.ref("players")
        playersref.remove();
    });
}
hide(){
    this.title.hide();
    this.button.hide();
    this.input_box.hide();
    this.greeting.hide();
}
}