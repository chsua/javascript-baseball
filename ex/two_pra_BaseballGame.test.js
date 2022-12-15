const BaseballGame = require("./two_pra_BaseballGame") ;

describe("BaseballGame_test", () => {
    const baseballGame = new BaseballGame() ;

    test("makeCorrectBall_정답맞추기", () => {
        const baseballGame = new BaseballGame() ;
        baseballGame.makeCorrectBall()
        expect(baseballGame.correctBall.length).toBe(3) ;
    })

    test("userBallCorrectBallmatch(userball)_정답 대조하기", () => {
        baseballGame.correctBall = [1,2,3]
        expect(baseballGame.userBallCorrectBallmatch([1,2,3])).toEqual([0,3]) ;
        expect(baseballGame.userBallCorrectBallmatch([3,4,5])).toEqual([1,0]) ;
        expect(baseballGame.userBallCorrectBallmatch([9,2,8])).toEqual([0,1]) ;
        expect(baseballGame.userBallCorrectBallmatch([9,8,7])).toEqual([0,0]) ;
    })

    test("isEnd(allStrike)_스트라이크 3개인지 확인하기", () => {
        const { Console } = require("@woowacourse/mission-utils");  
        const printSpy = jest.spyOn(Console, "print") ;
        const result = baseballGame.isEnd([0,3]) ;
        expect(result).toBeTruthy() ; 
        expect(printSpy).toHaveBeenCalledTimes(1) ;
    })
})