const homeScoreText = document.getElementById("home-score")
const guestScoreText = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

document.addEventListener('click', e => {
    switch(e.target.id) {
        case "home-score-1":
            homeScore += 1
            break
        case "home-score-2":
            homeScore += 2
            break
        case "home-score-3":
            homeScore += 3
            break
        case "guest-score-1":
            guestScore += 1
            break
        case "guest-score-2":
            guestScore += 2
            break
        case "guest-score-3":
            guestScore += 3
            break
        default:
            break
    }
    updateScoreTable()
})

document.getElementById("ng-btn").addEventListener('click', () => {
    homeScore = 0
    guestScore = 0
    updateScoreTable()
})

function updateScoreTable() {
    homeScoreText.textContent = homeScore
    guestScoreText.textContent = guestScore
    highlightScore()
}

function highlightScore() {
    homeScoreText.classList.remove("highlight")
    guestScoreText.classList.remove("highlight")

    if (homeScore > guestScore) {
        homeScoreText.classList.add("highlight")
    } else if (homeScore < guestScore) {
        guestScoreText.classList.add("highlight")
    }
}
