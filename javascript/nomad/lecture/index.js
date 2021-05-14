// const title = document.getElementById("title");
const title = document.querySelector("#title");

function handleResize() {
    console.log("I have been resized");
}

// function handleClick() {
//     title.style.color == "red" ? title.style.color = "blue" : title.style.color = "red"
// }

function handleOffline() {
    console.log("bye bye");
}

//javascript dom event mdn

window.addEventListener("resize", handleResize);
window.addEventListener("offline", handleOffline);

// title.addEventListener("click", handleClick);


const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
    // == same ==
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (!hasClass) {
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     title.classList.remove(CLICKED_CLASS);
    // }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();