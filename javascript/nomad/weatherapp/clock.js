const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function zeroTime(time) {
    return time < 10 ? `0${time}` : time;
}

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${zeroTime(hours)}:${zeroTime(minutes)}:${zeroTime(seconds)}`;
}



function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();