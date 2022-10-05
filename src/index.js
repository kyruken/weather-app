import header from './header.js';
import weather from './weather.js';

function homePage() {
    document.body.appendChild(header());
    let city = 'london';

    weather(city);
}

homePage();