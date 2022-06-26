const scoreHome = document.getElementById("score-home")
const scoreGuest = document.getElementById("score-guest")
let countHome = 0
let countGuest = 0


    
function btnHome1(){
    countHome += 1
    scoreHome.textContent = countHome
}

function btnHome2() {
    countHome += 2
    scoreHome.textContent = countHome
}
function btnHome3() {
    countHome += 3
    scoreHome.textContent = countHome
}


function btnGuest1() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}
function btnGuest2() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}
function btnGuest3() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}
function newGame() {
    countGuest = 0
    countHome = 0
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
}

 
 