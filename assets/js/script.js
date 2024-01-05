const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=43.5788&lon=-116.5598&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3";
const currentDayUrl = "https://api.openweathermap.org/data/2.5/weather?lat=43.5788&lon=-116.5598&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3";
function currentWeather() {
    fetch(currentDayUrl) 
        .then (function (response) {
            return response.json()
        })
        .then (function (data) {
            console.log(data)
            const displayList = document.getElementById("current");
            const createTemperature = document.createElement("li");
            const createWind = document.createElement("li");
            const createHumidity = document.createElement("li");
            const temperature = ((data.main.temp -273.15) * 1.8 + 32).toFixed(2);
            const wind = data.wind.speed;
            const humidity = data.main.humidity;
            createTemperature.textContent = `${temperature} ºF`;
            createWind.textContent = `${wind} MPH`;
            createHumidity.textContent = `${humidity}%`;
            displayList.append(createTemperature);
            displayList.append(createWind);
            displayList.append(createHumidity)
        })
};
function findWeather() {
    fetch(weatherUrl)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            console.log(data);
            for (let i = 4; i <data.list.length; i += 8) {
                console.log(data.list[i].dt_txt);
                const displayList = document.getElementById(i);
                const createTemperature = document.createElement("li");
                const createWind = document.createElement("li");
                const createHumidity = document.createElement("li");
                const temperature = ((data.list[i].main.temp - 273.15) * 1.8 + 32).toFixed(2);
                const wind = data.list[i].wind.speed;
                const humidity = data.list[i].main.humidity;
                createTemperature.textContent = `${temperature} ºF`;
                createWind.textContent = `${wind} MPH`;
                createHumidity.textContent = `${humidity}%`;
                displayList.append(createTemperature);
                displayList.append(createWind);
                displayList.append(createHumidity);
        }
    })
};
currentWeather();
findWeather();