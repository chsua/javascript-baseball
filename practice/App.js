const BaseballGame = require("./BaseballGame")

class App{
    play(){
        const baseballGame = new BaseballGame() ;
    }
}

const app = new App() ;
app.play() ;