class Player{
    constructor(){
        this.name = null;
        this.position = 0;
        this.index = 0;
        this.rank = null;
    }
getPlayerCount(){
    var playerCountref = database.ref("playerCount")

    playerCountref.on("value", function(data){
        playerCount = data.val();
    })
}
updatePlayerCount(count){
    var playerCountref = database.ref("/")

    playerCountref.update({
        playerCount : count
    });
    }
updatePlayerInfo(){
    var playerindex = "players/player" + this.index
    var playerref = database.ref(playerindex)

    playerref.set({
        playerName : this.name,
        playerPosition : this.position
    });
}
static getAllPlayersInfo(){
    var allplayerref = database.ref("players")
    allplayerref.on("value", (data) =>{
        allPlayers = data.val();
    })
}
}