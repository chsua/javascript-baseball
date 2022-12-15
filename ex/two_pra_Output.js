const { GAMEMESSAGE } = require("./two_pra_Constant") ;
const { Console } = require("@woowacourse/mission-utils");


const Output = {
    start() {
        Console.print(GAMEMESSAGE.start) ;
    },

    userInputBallResult([ball, strike]){ //arr
        let inputBallResultmessage = [] ;
        if (ball === 0 && strike === 0) inputBallResultmessage.push(GAMEMESSAGE.nothing) ;
        if (ball !== 0 ) inputBallResultmessage.push(`${ball}${GAMEMESSAGE.ball}`)
        if (strike !== 0 ) inputBallResultmessage.push(`${strike}${GAMEMESSAGE.strike}`)
        Console.print(inputBallResultmessage.join(" "))
    },

    end(){
        Console.print(GAMEMESSAGE.end) ;
    },

    messagePrint(message){
        Console.print(message) ;
    },

} ;


module.exports = Output ;
