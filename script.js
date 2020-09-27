var timerEl = document.querySelector("#timer");
var quizSpaceEl = document.querySelector("#quizSpace");
var startEl = document.querySelector("#start");
var initialsFormEl = document.querySelector("#initials-form");
var submitEl = document.querySelector("#submit");

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
timerEl.textContent = secondsLeft + " seconds remaining";

// Timer countdown function
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
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
function sendMessage() {
    quizSpaceEl.classList.add("game-over");
    quizSpaceEl.textContent = "GAME OVER";
    // Shows initials form to record score
    initialsFormEl.style.display = "block";
}

// When start button is clicked, timer countdown starts, questions are displayed one at a time
startEl.addEventListener("click", function() {
    setTime();
    quizSpaceEl.textContent = "";
    displayQuestion(quizArr[questionCounter]);
})

// When answer is clicked, next question will be displayed, 
document.addEventListener("click", function(event){
    var answerEl = quizArr[questionCounter].answer;

    if (event.target.matches("li")) {
       if (event.target.textContent === answerEl) {
            quizSpaceEl.textContent = "";
            questionCounter++;
            displayQuestion(quizArr[questionCounter]);
       } else {
        // If the answer is wrong, 5 seconds is subtracted from the clock
           secondsLeft = secondsLeft - 5;
       }
    }
})

// When submit is pressed, initials is stored and it takes you to the high scores page
// submitEl.addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     if (event.target.matches("button")) {
//         submitEl.setAttribute("src", "high_scores.html");
//     }  
// })



// Indicates after question answered about whether it was correct or wrong
// If questions run out, needs to go to game over screen
// When all questions are answered or timer reaches 0, the game is over
// Need score calculator -- is score time remaining? questions answered? points?
// Need to store the score + initials input to the high scores page