window.onload = function() {
    var seconds = 0;
    var milliseconds = 0;
    var appendmilliseconds = document.getElementById("milliseconds");
    var  appendseconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-Stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer , 10)
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }
}