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
            this.checkUserBallCorrectBall(userBall) ;

        } catch (error) {
            this.requestUserBall() ;
        }
    }
    
    userBallValidate(userBall){
        if (userBall.length !== BASEBALL.RANGE ) throw new Error (MESSAGE.ERROR_BALL_RANGE) ;
        if (userBall.includes(BASEBALL.EXCEPT)) throw new Error (MESSAGE.ERROR_BALL_EXCEPT) ;
        let countCheckSet = new Set() ;
        userBall.forEach(num => {
            countCheckSet.add(num) ;
            if (!Number.isInteger(+num)) throw new Error (MESSAGE.ERROR_BALL_RANGE) ; 
        });
        if (countCheckSet.size !== 3)  throw new Error (MESSAGE.ERROR_BALL_RANGE) ; 
    }

    checkUserBallCorrectBall(userBall){
        let ballStrikeCount = [0,0]
        for (let i = 0 ; i < 3 ; i++ ){
            if (this.#correctBall[i] === +userBall[i]) ballStrikeCount[1]++ ;
            else if (this.#correctBall.includes(+userBall[i])) ballStrikeCount[0]++ ;
        }
        return ballStrikeCount ;
    }

    printResult([ball, strike]){
        if ( ball === 0 && strike === 0 ) return MESSAGE.BALL[2] ;
        if ( ball === 0 ) return `${strike}${MESSAGE.BALL[1]}`
        if ( strike === 0 ) return `${ball}${MESSAGE.BALL[0]}`
        return `${ball}${MESSAGE.BALL[0]} ${strike}${MESSAGE.BALL[1]}`
    }

}



module.exports = BaseballGame ;
