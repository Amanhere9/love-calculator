let resultBtn = document.querySelector(".res")
let calcBtn = document.querySelector(".calc-btn")

let randomNum = Math.floor(Math.random() * 100);;
const loveScore = (e) => {
    if (randomNum >= 0 && randomNum <= 25) {
        // resultBtn.innerHTML = randomNum + "%";
        resultBtn.innerHTML = `Sorry☹️ your partner doesn't loves you, [love score = ${randomNum}%]`;
        console.log(e)
    }
    else if (randomNum >= 25 && randomNum <= 50) {
        // resultBtn.innerHTML = randomNum + "%";
        resultBtn.innerHTML = `Your partner's love is decent 😇, [love score = ${randomNum}%]`;
        console.log(e)
    }
    else if (randomNum >= 50 && randomNum <= 75) {
        // resultBtn.innerHTML = randomNum + "%";
        resultBtn.innerHTML = `Your partner loves you hardly ❤️‍🩹, [love score = ${randomNum}%]`;
        console.log(e)
    }
    else if (randomNum >= 75 && randomNum <= 100) {
        // resultBtn.innerHTML = randomNum + "%";
        resultBtn.innerHTML = `Congratulations 🎉🎉 you guys are perfect match, [love score = ${randomNum}%]`;
        console.log(e)
    }

    console.log(randomNum)
    // whileBlankName()
}
/*
! when the bothnames blocks are empty,then the calculate button is disabled only.
if (document.querySelector(".first-name").innertext = "") {
    calcBtn.disabled = true;
}
// const whileBlankName = () => {
// }
*/
calcBtn.addEventListener("click", () => {
    loveScore()
})


