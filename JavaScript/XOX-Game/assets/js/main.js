let checker = 0;
let gameList = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const clickHanler = (num) => {
    if (checker == 0 && gameList[num - 1] == 0) {
        document.getElementById(`btn${num}`).innerHTML = "X"
        checker = 1
        gameList[num - 1] = 2
    } else if (checker == 1 && gameList[num - 1] == 0) {
        document.getElementById(`btn${num}`).innerHTML = "O"
        checker = 0
        gameList[num - 1] = 4
    } else {

    }

    for (let i = 0; i < gameList.length; i++) {
        if (gameList[i] == 2 && gameList[i + 1] == 2 && gameList[i + 2] == 2) {
            alert("You Win X Player")
        }
        if (gameList[i] == 2 && gameList[i + 3] == 2 && gameList[i + 6] == 2) {
            alert("You Win X Player")
        }
        if (gameList[0] == 2 && gameList[4] == 2 && gameList[8] == 2) {
            alert("You Win X Player")
        }
        if (gameList[2] == 2 && gameList[4] == 2 && gameList[6] == 2) {
            alert("You Win X Player")
        }

        if (gameList[i] == 4 && gameList[i + 1] == 4 && gameList[i + 2] == 4) {
            alert("You Win O Player")
        }
        if (gameList[i] == 4 && gameList[i + 3] == 4 && gameList[i + 6] == 4) {
            alert("You Win O Player")
        }
        if (gameList[0] == 4 && gameList[5] == 4 && gameList[8] == 4) {
            alert("You Win O Player")
        }
        if (gameList[2] == 4 && gameList[4] == 4 && gameList[6] == 4) {
            alert("You Win O Player")
        }
    }
}