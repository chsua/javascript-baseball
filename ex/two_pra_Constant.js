const USERBALL = {
    min: 1,
    max: 9,
    count: 3,
}

const REGAME = {
    regame: "1",
    quit: "2",
}

const GAMEMESSAGE = {
    start: "숫자 야구 게임을 시작합니다.",
    end: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    ball: "볼",
    strike: "스트라이크",
    nothing: "낫싱",
    askBallNum : "숫자를 입력해주세요 :",
    askRegame: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
}

const ERRORMESSAGE = {
    range: `숫자는 ${USERBALL.min} 이상, ${USERBALL.max} 이하여야 합니다.`,
    count: `숫자의 갯수는 ${USERBALL.count}개야 합니다.`,
    overlap: "숫자가 중복되어서는 안됩니다.",
    regame: `${REGAME.regame}와 ${REGAME.quit} 중 하나를 입력하세요.`,
}

module.exports = {USERBALL, REGAME, GAMEMESSAGE, ERRORMESSAGE} ;