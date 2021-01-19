const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = "04 November 2021";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = timeFormat(days);
    hoursEl.innerHTML = timeFormat(hours);
    minsEl.innerHTML = timeFormat(mins);
    secondsEl.innerHTML = timeFormat(seconds);
}

function timeFormat(time) {
    return time < 10 ? `0${time}` : time;
}

// intial call
 
countdown();
setInterval(countdown, 1000);