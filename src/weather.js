
async function loadData(cityInput) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=89521003a7033fda93a71529572d268d`);
    try {
        let responseURL = await response.json();
        console.log(responseURL);
    } catch(error) {
        console.log('Unable to fetch data');
    }
}

export default loadData;