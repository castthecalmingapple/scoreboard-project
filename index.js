let homeScore = 0
let guestScore = 0
let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

homeEl.textContent = homeScore
guestEl.textContent = guestScore

function add1home(){
    homeScore += 1
    homeEl.textContent = homeScore
}

function add2home(){
    homeScore += 2
    homeEl.textContent = homeScore
}

function add3home(){
    homeScore += 3
    homeEl.textContent = homeScore
}

function add1guest(){
    guestScore += 1
    guestEl.textContent = guestScore
}

function add2guest(){
    guestScore += 2
    guestEl.textContent = guestScore
}

function add3guest(){
    guestScore += 3
    guestEl.textContent = guestScore
}