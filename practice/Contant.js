
const BASEBALL = {
    RANGE: 3,
    EXCEPT: 0,
    END_CHECK: "3스트라이크"
}

const MESSAGE = {
    START: "숫자 야구 게임을 시작합니다.",
    END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    REQUEST_BASEBALL: "숫자를 입력해주세요 : ",
    REQUEST_REGAME_QUIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    ERROR_BALL_RANGE: "[ERROR] 일의 자리 자연수 3개를 입력해주세요.",
    ERROR_BALL_EXCEPT: "[ERROR] 0이 포함되면 안됩니다.",
    ERROR_REGAME_QUIT: "[ERROR] 1이나 2를 입력해주세요.",
    BALL: ["볼", "스트라이크", "낫싱"], 
}

const REGAME_QUIT = {
    REGAME: 1,
    QUIT: 2,
}

module.exports = {BASEBALL, MESSAGE, REGAME_QUIT} ;