const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
startBtn = document.querySelector(".start-game"),
refreash = document.querySelector(".refreash-word"),
checkBtn = document.querySelector(".check-word");

let correctWord , timer;

const startGame = () => {
    gameTimer(30);
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomWord.words.split("");
    for (let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomWord.hint;
    correctWord = randomWord.words.toLowerCase();
    inputField.value = "";
}