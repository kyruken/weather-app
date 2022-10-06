import header from './header.js';
import findWeather from './data.js';

function homePage() {
    document.body.appendChild(header());
    findWeather();
    
}


function displayWeatherData(){
    
}

homePage();