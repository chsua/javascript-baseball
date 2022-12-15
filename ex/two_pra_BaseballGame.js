const { Random, Console } = require("@woowacourse/mission-utils");
const { start, userInputBallResult, end } = require("./two_pra_Output") ;
const { USERBALL, REGAME } = require("./two_pra_Constant") ;
const {askUserBall, askRegame} = require("./two_pra_Input") ;

class BaseballGame {
    constructor(){
        this.gameCount = 1 ;
    }

    game(){
        if (this.gameCount === 1 ) start() ;
        this.makeCorrectBall() ;
        this.userBall() ;
    }

    makeCorrectBall(){
        this.correctBall = Random.pickUniqueNumbersInRange(1, 9, USERBALL.count);
    }

    userBall(){
        askUserBall(( input ) => {     //input = 유효성검사가 끝난 배열형태
            let ballStrike = this.userBallCorrectBallmatch(input) ;
            userInputBallResult(ballStrike) ;
            if (this.isEnd(ballStrike)) return this.regameQuit() ;
            this.userBall() ;
        }) ;
    }

    userBallCorrectBallmatch(userball){
        let ballStrike = [ 0, 0 ] ;
        for (let i = 0 ; i < 3 ; i++ ){
            if (userball[i] === this.correctBall[i]) ballStrike[1]++ ;
            else if (this.correctBall.includes(userball[i])) ballStrike[0]++ ;
        }
        return ballStrike ;
    }

    isEnd(ballStrike){
        if (ballStrike[1] === USERBALL.count) {
            end() ;
            this.gameCount++ ;
            return true ;
        }
    }

    regameQuit(){
        askRegame( (input) => {
            if (input === REGAME.regame) return this.game() ;
            return Console.close() ;
        })
    }

}


module.exports = BaseballGame;