const { Console } = require("@woowacourse/mission-utils") ;
const { USERBALL, REGAME, GAMEMESSAGE, ERRORMESSAGE } = require("./two_pra_Constant") ;


const Input = {
    askUserBall(callback){
        Console.readLine(GAMEMESSAGE.askBallNum, (userBall) => {
            userBall = userBall.split("").map(Number) ;
            Input.userBallErrorCase(userBall, callback) ;
        }) ;
    }, 

    userBallErrorCase(input, callback) {
        try {
            Input.userBallValid(input) ;
            callback(input) ;
        } catch ( error ){
            Console.print(error.message) ;
            Input.askUserBall(callback) ;
        }
    },

    userBallValid(userBall){
        if ( userBall.length !== USERBALL.count ) throw new Error (ERRORMESSAGE.count) ;
        if ( [...new Set(userBall)].length !== 3 ) throw new Error (ERRORMESSAGE.overlap) ;
        userBall.forEach(x => {
            if ( USERBALL.min > x || USERBALL.max < x )  throw new Error (ERRORMESSAGE.range) ;       
        });
    }, 

    

    askRegame(callback){
        Console.readLine(GAMEMESSAGE.askRegame, (input) => {
            Input.regameErrorCase(input, callback)
        })
    },

    regameErrorCase(input, callback){
        try {
            Input.regameValid(input)
            callback(input) ;
        } catch ( error ){
            Console.print(error.message) ;
            Input.askRegame(callback) ;
        }
    },

    regameValid(input){
        if ( input !== REGAME.quit && input !== REGAME.regame ) throw new Error (ERRORMESSAGE.regame) ;
    },

}

module.exports = Input ;