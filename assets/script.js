// Define a function to start the quiz
function startQuiz() 
    // Initialize variables
    let score = 0;
    let timeRemaining = 60;
    let currentQuestion = 0;
    const questions = [
      {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome"],
        correctAnswer: "Paris"
      },
      {
        question: "What is the largest planet in the solar system?",
        answers: ["Earth", "Mars", "Jupiter"],
        correctAnswer: "Jupiter"
      },
      {
        question: "What is the chemical symbol for silver?",
        answers: ["Ag", "Si", "Au"],
        correctAnswer: "Ag"
      }
    ];
  
    // Start the timer
    const startTime = Date.now();
  
    // Present the questions to the user
    function presentQuestion() {
      // Check if the game is over
      if (timeRemaining <= 0 || currentQuestion >= questions.length) {
        endQuiz();
        return;
      }
  
      // Display the question and options
      const questionContainer = document.getElementById("question-container");
      questionContainer.textContent = questions[currentQuestion].question;
      const answerContainer = document.getElementById("answer-container");
      answerContainer.innerHTML = "";
      for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
        const answerButton = document.createElement("button");
        answerButton.textContent = questions[currentQuestion].answers[i];
        answerButton.addEventListener("click", selectAnswer);
        answerContainer.appendChild(answerButton);
      }
    }
  
    // Define a function to handle the user's answer selection
    function selectAnswer(event) {
      // Check if the answer is correct
      const selectedAnswer = event.target.textContent;
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        score++;
      } else {
        timeRemaining -= 10;
      }
  
      // Move on to the next question
      currentQuestion++;
      presentQuestion();
    }
  
    // Define a function to end the quiz
    function endQuiz() {
      // Hide the question container
      const questionContainer = document.getElementById("question-container");
      questionContainer.style.display = "none";
  
      // Show the game over screen
      const gameOverContainer = document.getElementById("game-over-container");
      gameOverContainer.style.display = "block";
      const scoreDisplay = document.getElementById("score-display");
      scoreDisplay.textContent = score;
  
      // Set up the form to save the user's score
      const initialsInput = document.getElementById("initials-input");
      const saveButton = document.getElementById("save-button");
      saveButton.addEventListener("click", saveScore);
  
      function saveScore() {
        // Save the score to a file or database
        const initials = initialsInput.value;
        console.log(`Saving score for ${initials}: ${score}`);
      }
    }
  
  