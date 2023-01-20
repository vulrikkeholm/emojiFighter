let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

function getFighter() {
    let randomIndex = Math.floor( Math.random() * 17)
    return fighters[randomIndex]
}

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    console.log(getFighter()+"vs"+getFighter())
    stageEl.textContent=getFighter()+" vs "+getFighter()
})
