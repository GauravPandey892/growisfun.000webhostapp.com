var session = 'work';

var timer = document.getElementById("timer");

var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var stopButton = document.getElementById("stop");
var workButton = document.getElementById("work");
var breakButton = document.getElementById("break");
var time_worked = document.getElementById("time_worked");

var minDisplay = document.getElementById("mindisplay");
var secDisplay = document.getElementById("secdisplay");
var log = document.getElementById("log");

var isClockRunning = false;

var mintosec = 60;
var sectomsec = 1000;

var worktime = 25 * mintosec;
var timeleft = 25 * mintosec;
var breaktime = 5 * mintosec;
var workcount = 0;
var totalworktime = 0;
var hour;
var min;


workButton.addEventListener("click", function () {
    session = 'work';
    timeleft = 25 * mintosec;
    toggleClock();
});

breakButton.addEventListener("click", function () {
    session = 'break';
    timeleft = 5 * mintosec;
    toggleClock();
});
pauseButton.addEventListener("click", toggleClock);
stopButton.addEventListener("click", stopclock);


function toggleClock() {
    if (isClockRunning) {
        clearInterval(clockinterval);
        isClockRunning = false;
    }
    else {
        isClockRunning = true;
        clockinterval = setInterval(function () {
            stepDown();
            displaytime();
        }, 0.001 * sectomsec);
    }
}

function stopclock() {
    clearInterval(clockinterval);
    isClockRunning = false;
    timeleft = 25 * mintosec;
    displaytime();
}

function displaytime() {
    var secleft = timeleft;
    var result = "";
    var sec = secleft % 60;
    var min = parseInt(secleft / 60) % 60;

    min < 10 ? minDisplay.innerHTML = '0' + min.toString() : minDisplay.innerHTML = min;
    sec < 10 ? secDisplay.innerHTML = '0' + sec.toString() : secDisplay.innerHTML = sec;
}

function stepDown() {
    if (timeleft > 0)
        timeleft--;
    else if (!timeleft) {
        if (session == 'work') {
            log.innerHTML = 'Last Session : Work';
            session = 'break';
            timeleft = 5 * mintosec;
            workcount += 1;
            totalworktime = 25 * workcount;
            hour = parseInt(totalworktime / 60);
            min = totalworktime % 60;
            time_worked.innerHTML = "Total time worked : " + hour + " hr  " + min + " min";

        }
        else {
            log.innerHTML = 'Last Session : Break'
            session = 'work';
            timeleft = 25 * mintosec;
        }
    }
}