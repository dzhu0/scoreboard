let homeScoreText = document.getElementById("home-score")
let guestScoreText = document.getElementById("guest-score")
let homeScoreDiv = document.getElementById("home-score-div")
let guestScoreDiv = document.getElementById("guest-score-div")
let homeScore = 0;
let guestScore = 0;

function homeScore1() {
    homeScore++
    homeScoreText.textContent = homeScore
    highlight()
}

function homeScore2() {
    homeScore += 2
    homeScoreText.textContent = homeScore
    highlight()
}

function homeScore3() {
    homeScore += 3
    homeScoreText.textContent = homeScore
    highlight()
}

function guestScore1() {
    guestScore++
    guestScoreText.textContent = guestScore
    highlight()
}

function guestScore2() {
    guestScore += 2
    guestScoreText.textContent = guestScore
    highlight()
}

function guestScore3() {
    guestScore += 3
    guestScoreText.textContent = guestScore
    highlight()
}

function highlight() {
    if (homeScore > guestScore) {
        homeScoreDiv.className = "score-div" + " highlight"
        guestScoreDiv.className = "score-div"
    } else if (homeScore < guestScore) {
        guestScoreDiv.className = "score-div" + " highlight"
        homeScoreDiv.className = "score-div"
    } else {
        homeScoreDiv.className = "score-div"
        guestScoreDiv.className = "score-div"
    }
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreText.textContent = homeScore
    guestScoreText.textContent = guestScore
    highlight()
}