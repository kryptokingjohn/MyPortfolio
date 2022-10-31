// Variables for Buttons

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// Variables for Time Display Values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for Leading Zeroes in Time Display Values

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables to control the functioning of the StopWatch

let timerInterval = null;
let timerStatus = "stopped"; 


// Stop Watch Function - increases the seconds, minutes, hours in sequence

function stopWatch () {

    seconds++;

    if (seconds > 59) {

        seconds = 0;
        minutes++;

        if (minutes > 59) {

            minutes = 0;
            hours++;
        }
    }

    // Add leading zeroes if the seconds, minutes, or hours are single digits

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    // Change the timer's text value to reflect the time

    document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// Add Event Listeners for Start/Stop and Reset buttons

startStopBtn.addEventListener('click', function() {

    if (timerStatus === "stopped") {

        // setInterval assigns the timerInterval variable an ID
        timerInterval = window.setInterval(stopWatch, 1000);

        // The Stopwatch starts after the play button has been pressed; change the icon to #pause
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = "started";

    } else {

        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = "stopped";

    }
});

resetBtn.addEventListener('click', function() {

    window.clearInterval(timerInterval);
    document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';

    hours = minutes = seconds = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
});