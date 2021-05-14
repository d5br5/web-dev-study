const body = document.querySelector('body');

const IMG_NUMBER = 2;


function genRandom() {
    const num = Math.ceil(Math.random() * IMG_NUMBER);
    return num;
}

function handleImgLoad() {

}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./img/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);

}

init();