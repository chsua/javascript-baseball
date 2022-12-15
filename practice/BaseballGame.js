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

    requestUserBall(){
        Console.readLine(MESSAGE.REQUEST_BASEBALL, userBall => {

        })
    }

    userBallCallback(userBall){
        try {
            this.userBallValidate(userBall) ;

        } catch (error) {

        }
    }
    
    userBallValidate(userBall){
        if (userBall.length !== BASEBALL.RANGE ) throw new Error (MESSAGE.ERROR_BALL_RANGE) ;
        if (userBall.includes(BASEBALL.EXCEPT)) throw new Error (MESSAGE.ERROR_BALL_EXCEPT) ;
        userBall.forEach(num => {
            if (!Number.isInteger(+num)) throw new Error (MESSAGE.ERROR_BALL_RANGE) ; 
        });
    }


}



module.exports = BaseballGame ;
