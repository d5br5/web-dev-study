const weather = document.querySelector('.js-weather');

const COORDS = 'coords';
const API_KEY = "d1e2d66d65d039c5110ad5c604046b20";

function getWeather(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature}'C at ${place}`
        })
}

function saveCoords(obj) {
    localStorage.setItem(COORDS, JSON.stringify(obj));
}

function handleGeoSuccess(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const coordsObj = {
        lat,
        long
    };
    saveCoords(coordsObj);
    getWeather(lat, long);
}

function handleGeoError() {
    console.log("cannot load");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords()
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.lat, parsedCoords.long);
    }
}

function init() {
    loadCoords();
}

init();