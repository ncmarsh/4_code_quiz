var timerEl = document.querySelector("#timer");
var mainEl = document.querySelector("#main");

// Timer countdown function
var secondsLeft = 75;

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

// Game over function
function sendMessage() {
    timerEl.textContent = "GAME OVER";

    // var imgEl = document.createElement("img");

    // imgEl.setAttribute("src", "images/image_1.jpg");
    // mainEl.appendChild(imgEl);
  
}

setTime();

// Initial welcome screen and start button
// Timer needs to start when quiz start button is pushed
// Cards need to shuffle through as questions are answered
// Indicates after question answered about whether it was correct or wrong
// time needs to subtract if a question is wrong ()=== false?)
// Need score calculator -- is score time remaining? questions answered? points?
// Need input at the end for initials