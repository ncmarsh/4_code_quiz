var timerEl = document.querySelector("#timer");
var quizSpaceEl = document.querySelector("#quizSpace");
var startEl = document.querySelector("#start");
var submitBtnEl = document.querySelector("#submit");
var initialsFormEl = document.querySelector("#initials-form");
var initialsTextEl = document.querySelector("#initials-text");
var errorDivEl = document.querySelector("#error");
var highScoresListEl = document.querySelector("#high-scores-list");
var initialsItemSpan = document.querySelector(".initials");
var scoreItemSpan = document.querySelector(".score");
var resetBtnEl = document.querySelector("#resetBtn");

// Counter to keep track of questions within quizArr
var questionCounter = 0;

// Questions and answers array 
var quizArr = [
    // Question 1
    { questionTitle: "Which language establishes a web page?",
      multipleChoice: ["CSS", "JavaScript", "HTML", "jQuery"],  
      answer: "HTML"
    },

    // Question 2
    { questionTitle: "Which language styles a web page?",
    multipleChoice: ["JavaScript", "CSS", "HTML", "localStorage"],  
    answer: "CSS"
    },

    // Question 3
    { questionTitle: "Which language makes a web page interactive?",
    multipleChoice: ["HTML", "CSS", "JavaScript", "SQL"],  
    answer: "JavaScript"
    },

    // Question 4
    { questionTitle: "Which of these is considered an Event Listener?",
    multipleChoice: ["Mouse click", "Scrolling", "Key press", "All of the above"],  
    answer: "All of the above"
    },

    // Question 5
    { questionTitle: "How long did it take to invent JavaScript?",
    multipleChoice: ["2 years", "10 days", "10 years", "6 months"],  
    answer: "10 days"
    },

];

// Timer established on screen
var secondsLeft = 30;
if (timerEl) {
    timerEl.textContent = secondsLeft + " seconds remaining";
}

// Timer countdown function
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining";

        if (secondsLeft <= 0 || questionCounter === quizArr.length) {
            clearInterval(timerInterval);
            gameOverMsg();
        }
    }, 1000);
}

// Display questions one at a time 
function displayQuestion (question) {

    // Paragraph element for question display
    var quizPL = document.createElement("p");

    // Unordered list element for choice display
    var choiceList = document.createElement("ul");
    var choiceAEl = document.createElement("li");
    var choiceBEl = document.createElement("li");
    var choiceCEl = document.createElement("li");
    var choiceDEl = document.createElement("li");
    
    // Add questionTitle text to quizPL p element
    quizPL.textContent=question.questionTitle;

    // Add multipleChoice text to list item elements
    choiceAEl.textContent=question.multipleChoice[0];
    choiceBEl.textContent=question.multipleChoice[1];
    choiceCEl.textContent=question.multipleChoice[2];
    choiceDEl.textContent=question.multipleChoice[3];
    
    // Append quizPL p element to <div id="questions"> element
    quizSpaceEl.appendChild(quizPL);

    // Append multipleChoice list items element to quizPL p element
    quizPL.appendChild(choiceList);
    choiceList.appendChild(choiceAEl);
    choiceList.appendChild(choiceBEl);
    choiceList.appendChild(choiceCEl);
    choiceList.appendChild(choiceDEl);
}

// Game over function when time runs out 
function gameOverMsg() {
    quizSpaceEl.classList.add("game-over");
    quizSpaceEl.textContent = "GAME OVER";
    // Shows initials form to record score
    initialsFormEl.style.display = "block";
}

// When start button is clicked, timer countdown starts, first question is displayed
if (startEl) {
    startEl.addEventListener("click", function() {
        setTime();
        quizSpaceEl.textContent = "";
        displayQuestion(quizArr[questionCounter]);
    })
}

// When answer is clicked, next question will be displayed, 
document.addEventListener("click", function(event){
    // If you select a list item
    if (event.target.matches("li")) {
        // If you select the list item that is the answer
        if (event.target.textContent === quizArr[questionCounter].answer) {
            // quizSpaceEl will clear
            quizSpaceEl.textContent = "";
            // Adds one to the questionCounter
            questionCounter++;
            // If the questionCounter is still less than the length of the quizArr, then display the next question
            if (questionCounter < quizArr.length) {
                displayQuestion(quizArr[questionCounter]);
                // Otherwise, end the game
            } else {
                gameOverMsg();
            }
        } else {
        // If the answer is wrong, 5 seconds is subtracted from the clock
        secondsLeft = secondsLeft - 5;
        }
    }
})

// Confirms if initials were input or not
function displayMessage (type, message) {
    errorDivEl.textContent = message;
    errorDivEl.setAttribute("class", type);
}

// When submit is pressed, initials is stored
if (submitBtnEl) {
    submitBtnEl.addEventListener("click", function(event) {
        event.preventDefault();

        // create score object from time remaining and initials input
        var scoreStore = {
            score: secondsLeft,
            initials: initialsTextEl.value.trim()
        }

        // Tells user to input initials to high score if left blank
        if (scoreStore.initials === "") {
            displayMessage("error", "Please enter initials to record your score.");
        } else {
            location.href = "high_scores.html";
        }

        // Set initials and score to localStorage
        var scoreStoreStr = JSON.stringify(scoreStore);
        console.log("score storage", scoreStoreStr);
        localStorage.setItem("score record", scoreStoreStr);
    })
}

// Retrieve scores from local storage on high scores page
if (highScoresListEl) {
    var retrScores = JSON.parse(localStorage.getItem("score record"));
    initialsItemSpan.textContent = retrScores.initials;
    scoreItemSpan.textContent = retrScores.score;
}

// If reset high scores button is pressed, high score board is cleared
if (resetBtnEl) {
    resetBtnEl.addEventListener("click", function(event) {
        event.preventDefault();

        initialsItemSpan.textContent = "";
        scoreItemSpan.textContent = "";

        localStorage.clear();
    })
}