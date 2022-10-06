
let weatherData;

async function loadData(cityInput) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=89521003a7033fda93a71529572d268d`);
    try {
        let responseData = await response.json();
        return responseData;
    } catch(error) {
        console.log('Unable to fetch data');
    }
}

function getTextInput() {
    const textInput = document.getElementById('textinput');
    return textInput.value;
}

function findWeather() {
    let haveSet = false;

    function setFindEvent() {
        haveSet = true;
        console.log("swag");
        const findButton = document.getElementById('findcity');
        findButton.addEventListener('click', async function findCity(){
            let cityInput = getTextInput();
            weatherData = await loadData(cityInput);
            console.log(weatherData);
            document.body.appendChild(displayData());
        });
    }
    //Put this if statement to make it so that setting the FindEvent doesn't occur every time
    //findWeather is called
    if(haveSet === false) {
        setFindEvent();
    }

}

function displayData() {
    const dataContainer = document.createElement('div');
    const feels_like = document.createElement('h2');
    const temp = document.createElement('h2');
    const city = document.createElement('h2');
    const weather = document.createElement('h2');

    setData(feels_like, temp, city, weather);
    appendData(feels_like, temp, city, weather, dataContainer);

    return dataContainer;
}

function appendData(feels_like, temp, city, weather, dataContainer) {
    dataContainer.appendChild(feels_like);
    dataContainer.appendChild(temp);
    dataContainer.appendChild(city);
    dataContainer.appendChild(weather);
}

function setData(feels_like, temp, city, weather) {
    const dataObject = weatherData;
    feels_like.textContent = dataObject.main.feels_like;
    temp.textContent = dataObject.main.temp;
    city.textContent = dataObject.name;
    weather.textContent = dataObject.weather[0].main;

}



export default findWeather;