
async function loadData(cityInput) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=89521003a7033fda93a71529572d268d`);
    try {
        let responseData = await response.json();
        return responseData;
    } catch(error) {
        console.log('Unable to fetch data');
    }
}

async function getData(city) {
    let weatherData = await loadData(city);
    console.log(weatherData);
}

export default getData;