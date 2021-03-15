console.log('Working');
const fetch = require("node-fetch");



async function getWeatherData() {
    //This is for a 3hr weather breakdown for the next 5-days
    //For documentation visit https://openweathermap.org/forecast5
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=06716,us&units=imperial&appid=2be7742da0af84cb9f2e91003b0e3df6');
    const data = await response.json();
    return data;
}



getWeatherData().then(data => console.log(data));
let $apiDisplay = document.querySelector('#api-display');
$apiDisplay.innerHTML = "Hi"; 
