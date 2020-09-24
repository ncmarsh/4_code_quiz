var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var startEl = document.querySelector("#start");

// Questions and answers array 
var quiz = [
    // Question 1
    { "questionOne": "What language establishes a web page?",
      "answerOne": "CSS",
      "answerTwo": "JavaScript",
      "answerThree": "HTML",
      "answerFour": "jQuery"
    },

    // Question 2
    { "questionTwo": "What language styles a web page?",
      "answerOne": "JavaScript",
      "answerTwo": "CSS",
      "answerThree": "HTML",
      "answerFour": "localStorage"
    },

    // Question 3
    { "questionThree": "What language makes a web page interactive?",
      "answerOne": "HTML",
      "answerTwo": "CSS",
      "answerThree": "JavaScript",
      "answerFour": "SQL"
    },

    // Question 4
    { "questionFour": "What is considered an Event Listener?",
      "answerOne": "Mouse click",
      "answerTwo": "Scrolling",
      "answerThree": "Key press",
      "answerFour": "All of the above"
    },

    // Question 5
    { "questionFive": "How long did it take to invent JavaScript?",
      "answerOne": "2 years",
      "answerTwo": "10 days",
      "answerThree": "10 years",
      "answerFour": "6 months"
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
function displayFirst () {
    console.log(quiz[0]);
    var answerALiEl = document.createElement("li");
    var answerBLiEl = document.createElement("li");
    var answerCLiEl = document.createElement("li");
    var answerDLiEl = document.createElement("li");
    var answerOl = document.createElement("ol");

    answerALiEl.setAttribute("class", "answer");
    answerBLiEl.setAttribute("class", "answer");
    answerCLiEl.setAttribute("class", "answer");
    answerDLiEl.setAttribute("class", "answer");

    answerOl.appendChild(answerALiEl);
    answerOl.appendChild(answerBLiEl);
    answerOl.appendChild(answerCLiEl);
    answerOl.appendChild(answerDLiEl);
    questionsEl.appendChild(answerOl);
}

// When start button is clicked, timer countdown starts 
startEl.addEventListener("click", function() {
    displayFirst();
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
// time needs to subtract if a question is wrong ()=== false?)
// Need score calculator -- is score time remaining? questions answered? points?
// Need input at the end for initials