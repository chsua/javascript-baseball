const BaseballGame = require("./two_pra_BaseballGame") ;

class App {
    play(){
        let baseballGame = new BaseballGame() ;
        baseballGame.game() ;
    }
}

let app = new App() ;
app.play() ;

module.exports = App;