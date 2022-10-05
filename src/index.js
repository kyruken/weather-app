import header from './header.js';
import loadData from './weather.js';

function homePage() {
    document.body.appendChild(header());
    let city = 'london';


    const weatherContainer = document.createElement('div');
    async function getData() {
        let weatherData = await loadData(city);
        console.log(weatherData);
    }
    getData();
}

homePage();