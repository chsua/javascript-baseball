const MissionUtils = require("@woowacourse/mission-utils");

// MissionUtils.Console.readLine('닉네임을 입력해주세요.', (answer) => { })
// MissionUtils.Console.print('안녕하세요.');
// MissionUtils.Console.close()

class App {
    constructor(){
        this.count = 1;
    }

    play(){
        if (this.count == 1 ) this.gameStartPrint () ;
        this.makeCorrect() ;
        this.readline() ;
    }

    makeCorrect(){
        this.correct = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3) ;
    }

    readline(){
        MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
            answer = answer.split("").map(Number) ;
            this.userInputNumValidate(answer)  ;
            let correctResult = this.userInputNumCorrectCheck(answer) ;
            this.userCorrectPrint (correctResult) ;
            this.gameEndCheck(correctResult)
        })
    }

    userInputNumValidate(numArr){
        if (numArr.length !== 3) throw new Error("3자리 숫자를 입력해주세요.");
        let testSet = new Set(numArr) ;
        if (testSet.size !== 3) throw new Error("중복되지 않는 숫자를 입력하세요.");
        numArr.forEach( x => {
            if (x < 0 || x > 10) throw new Error("1이상 9이하 숫자를 입력하세요.");
        })
    }

    userInputNumCorrectCheck(numArr){
        let correctResult = [0,0] ;
        for (let i = 0 ; i < 3 ; i++ ){
            if (numArr[i] == this.correct[i]) correctResult[1]++ ;
            else if (this.correct.includes(numArr[i])) correctResult[0]++ ;
        }
        return correctResult ;
    }


    userCorrectPrint (correctResult){
        if (correctResult[0] == 0 && correctResult[1] == 0 ) MissionUtils.Console.print("낫싱")
        else if (correctResult[0] == 0 ) MissionUtils.Console.print(`${correctResult[1]}스트라이크`)
        else if (correctResult[1] == 0 ) MissionUtils.Console.print(`${correctResult[0]}볼`)
        else MissionUtils.Console.print(`${correctResult[0]}볼 ${correctResult[1]}스트라이크`);
    }

    gameEndCheck(correctResult){
        if (correctResult[1] == 3) this.askRetry() ;
        else this.readline() ;
    }
    
    gameStartPrint (){
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }

    askRetry(){
        MissionUtils.Console.readLine("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (answer) => {
            this.askRetryValidate(answer) ;
            if (answer == "1" ) {
                this.count++ ;
                this.play() ;
            } else MissionUtils.Console.close() ;
        })
    }

    askRetryValidate(answer){
        if (answer !== "1" && answer !== "2") throw new Error("1과 2로 입력하세요");
    }
}

/* 기능구현
* 1. 게임이 시작하면 야구게임 정답 생성
* 2. 리드라인으로 유저에게 답 받아오기 // 유효성 검사
* 3. 결과 출력하기
* 4. 재시작 의사 물어보기
* 5. 재시작한다고 하면 1로 돌아가기
*/





const app = new App();
app.play();


module.exports = App;