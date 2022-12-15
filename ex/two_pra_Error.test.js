const ErrorHandler = require("./two_pra_Error") ;
const { Console } = require("@woowacourse/mission-utils");

const printSpy = jest.spyOn(Console, "print") ;

describe("ErrorHandler", () => {
    test("예외처리 시 문구 프린트하고 콜백 부르기", () => {
        const callback = jest.fn() ;
        ErrorHandler.throwException("[Error]", callback)

        expect(callback).toHaveBeenCalledTimes(1);
        expect(printSpy).toHaveBeenCalledWith("[Error]");
    })


})