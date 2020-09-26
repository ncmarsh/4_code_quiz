var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#quizSpace");
var startEl = document.querySelector("#start");

// Questions and answers array 
var quizArr = [
    // Question 1
    { questionTitle: "What language establishes a web page?",
      multipleChoice: ["CSS", "JavaScript", "HTML", "jQuery"],  
      answer: "HTML"
    },

    // Question 2
    { questionTitle: "What language styles a web page?",
    multipleChoice: ["JavaScript", "CSS", "HTML", "localStorage"],  
    answer: "CSS"
    },

    // Question 3
    { questionTitle: "What language makes a web page interactive?",
    multipleChoice: ["HTML", "CSS", "JavaScript", "SQL"],  
    answer: "JavaScript"
    },

    // Question 4
    { questionTitle: "What is considered an Event Listener?",
    multipleChoice: ["Mouse click", "Scrolling", "Key press", "All of the above"],  
    answer: "All of the above"
    },

    // Question 5
    { questionTitle: "How long did it take to invent JavaScript?",
    multipleChoice: ["2 years", "10 days", "10 years", "6 months"],  
    answer: "10 days"
    },

];

// Timer countdown function
var secondsLeft = 60;

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

// Display first question 
function displayQuestion (question) {
    console.log(question);
    // Paragraph element for question display
    var quizPL = document.createElement("p");

    // Ordered list for choice display
    var choiceList = document.createElement("ol");
    var choiceAEl = document.createElement("li");
    var choiceBEl = document.createElement("li");
    var choiceCEl = document.createElement("li");
    var choiceDEl = document.createElement("li");
    
    // Attached question text to quiz P element
    quizPL.textContent=question.questionTitle;

    // Attach choice text to list item element
    choiceAEl.textContent=question.multipleChoice[0];
    choiceBEl.textContent=question.multipleChoice[1];
    choiceCEl.textContent=question.multipleChoice[2];
    choiceDEl.textContent=question.multipleChoice[3];
    
    // Append quiz P element to <div id="questions">
    questionEl.appendChild(quizPL);

    // Append answer list element to quiz P element
    quizPL.appendChild(choiceList);
    choiceList.appendChild(choiceAEl);
    choiceList.appendChild(choiceBEl);
    choiceList.appendChild(choiceCEl);
    choiceList.appendChild(choiceDEl);
}

// When start button is clicked, timer countdown starts 
startEl.addEventListener("click", function() {
    displayQuestion(quizArr[0]);
    setTime();
})

// When answer is clicked, next question will be displayed 
document.addEventListener("click", function(event){
    console.log(event.target);
})

window.onload = function () {
    list = document.getElementsByClassName("answer");
    for (var i = 0; i < list.length; i++) {
      list[i].addEventListener("click", function (e) {
          e.preventDefault();
          console.log("clicked an answer");
      });
    }
  };

// Game over function
function sendMessage() {
    timerEl.textContent = "GAME OVER";
    var initialsText = prompt("GAME OVER! Please enter your initials");
    console.log(initialsText);
}



// Cards need to shuffle through as questions are answered
// Indicates after question answered about whether it was correct or wrong
// If a question is wrong, time is subtracted from the clock
  // time needs to subtract if a question is wrong ()=== false?)
// When all questions are answered or timer reaches 0, the game is over
// Need input at the end for initials
// Need score calculator -- is score time remaining? questions answered? points?