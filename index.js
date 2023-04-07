const homeScoreDiv = document.getElementById("home-score-div")
const guestScoreDiv = document.getElementById("guest-score-div")

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
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
    highlightScore()
}

function highlightScore() {
    guestScoreDiv.classList.remove("highlight")
    homeScoreDiv.classList.remove("highlight")

    if (homeScore > guestScore) {
        homeScoreDiv.classList.add("highlight")
    } else if (homeScore < guestScore) {
        guestScoreDiv.classList.add("highlight")
    }
}
