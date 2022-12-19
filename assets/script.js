const startButton = document.getElementById("start-Btn")
const questionContainerElement = document.getElementById
('question-container')


startButton.addEventListener("click", startGame)


function startGame() {
    console.log("Test")
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}


function setNextQuestion () {

}

function selectAnswer (){


}

