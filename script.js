var timerEl = document.querySelector("#timer");
var quizSpaceEl = document.querySelector("#quizSpace");
var startEl = document.querySelector("#start");

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

// Timer established
var secondsLeft = 0;
timerEl.textContent = secondsLeft + " seconds remaining";

// Timer countdown function
function setTime() {
    var secondsLeft = 60;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

// Display first question 
function displayQuestion (question) {
    console.log(question);
    
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
    
    // Append quizPL p element to <div id="questions">
    quizSpaceEl.appendChild(quizPL);

    // Append multipleChoice list items element to quizPL p element
    quizPL.appendChild(choiceList);
    choiceList.appendChild(choiceAEl);
    choiceList.appendChild(choiceBEl);
    choiceList.appendChild(choiceCEl);
    choiceList.appendChild(choiceDEl);
}

// Game over function
function sendMessage() {
    timerEl.textContent = "GAME OVER";
    var initialsText = prompt("GAME OVER! Please enter your initials");
    console.log(initialsText);
}

// When start button is clicked, timer countdown starts, first question is displayed
startEl.addEventListener("click", function() {
    setTime();
    quizSpaceEl.textContent = "";
    displayQuestion(quizArr[0]);
})

// When answer is clicked, next question will be displayed 
document.addEventListener("click", function(event){
    event.preventDefault();

    if (event.target.matches("li")) {
        console.log(event.target.textContent);
       if (event.target.textContent === quizArr[0].answer) {
           console.log("that's right!");
       } ;
    }

})



// Cards need to shuffle through as questions are answered
// Indicates after question answered about whether it was correct or wrong
// If a question is wrong, time is subtracted from the clock
  // time needs to subtract if a question is wrong ()=== false?)
// When all questions are answered or timer reaches 0, the game is over
// Need input at the end for initials
// Need score calculator -- is score time remaining? questions answered? points?