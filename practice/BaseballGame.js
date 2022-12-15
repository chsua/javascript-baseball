const {BASEBALL, MESSAGE, REGAME_QUIT} = require("./Contant") ;
const { Console, Random } = require("@woowacourse/mission-utils");

class BaseballGame {
    #correctBall 

    constructor(){
        this.#correctBall = makeCorrectBall() ;
    }

    start(){
        Console.print(MESSAGE.START) ;
    }

    makeCorrectBall(){
        return Random.pickUniqueNumbersInRange(1, 9, 3);
    }

}

module.exports = BaseballGame ;
