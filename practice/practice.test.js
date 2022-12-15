const BaseballGame = require("./BaseballGame")

describe("baseballGame", () => {
    test("makeCorrectBall_정답 만들기", () => {
        const baseball = new BaseballGame()
        const val = baseball.makeCorrectBall()
        expect(val.length).toBe(3)
    })

    test("userBallValidate_예외처리", () => {
        const baseball = new BaseballGame()
        expect(() => {
            baseball.userBallValidate(["1","3","0"])  // 0처리
        }).toThrow("[ERROR]");
        expect(() => {
            baseball.userBallValidate(["1","3","r"])  // 숫자형 처리
        }).toThrow("[ERROR]");
        expect(() => {
            baseball.userBallValidate(["1","3","1"])  // 중복 처리
        }).toThrow("[ERROR]");
        expect(() => {
            baseball.userBallValidate(["1","3","4","5"])  // 갯수 처리
        }).toThrow("[ERROR]");
    })

    test("printResult_프린트용 결과 반환", () => {
        const baseball = new BaseballGame()
        expect(baseball.printResult([0,1])).toEqual("1스트라이크");
        expect(baseball.printResult([0,3])).toEqual("3스트라이크");
        expect(baseball.printResult([1,1])).toEqual("1볼 1스트라이크");
        expect(baseball.printResult([0,0])).toEqual("낫싱");
    })

    test("checkThreeStrike_3개 다 맞췄는지 확인", () => {
        const baseball = new BaseballGame()
        expect(baseball.checkThreeStrike("1볼 1스트라이크")).not.toBeTruthy();
        expect(baseball.checkThreeStrike("3스트라이크")).toBeTruthy();
    })

    test("regameValidate_예외처리 확인", () => {
        const baseball = new BaseballGame()
        expect( () => {
            baseball.regameValidate("3")
        }).toThrow("[ERROR]")
    })

    test("regameCallback", () => {
        const baseball = new BaseballGame()
        baseball.regame = jest.fn() ;
        baseball.regameCallback("1") ;
        expect(baseball.regame).toHaveBeenCalled() ;
    })

})


