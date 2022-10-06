import header from './header.js';
import getData from './weather.js';

function homePage() {
    document.body.appendChild(header());
    readCityInput();
}

function readCityInput() {
    const textInput = document.getElementById('textinput');
    const findButton = document.getElementById('findcity');

    let city;

    function setEvents() {
        findButton.addEventListener('click', () => getData(city));
        textInput.addEventListener('input', function(){
            city = textInput.value;
        })
    }
    setEvents();
}

homePage();