//variables
const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=43.5788&lon=-116.5598&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3";
const currentDayUrl = "https://api.openweathermap.org/data/2.5/weather?lat=43.5788&lon=-116.5598&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3";
const today = new Date();
let day = today.getDay();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const dates = document.getElementsByClassName("date");
const combinedDate = `${month}/${day}/${year}`
const currentDate = document.getElementById("date-location");

currentDate.textContent = `Nampa ${combinedDate}`;

for (let i = 0; i < dates.length; i++) {
    day++; 
    dates[i].textContent = `${month}/${day}/${year}`;
}

//reading the data coming from the current weather API
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
            const icon = data.weather[0].icon;
            const temperature = ((data.main.temp -273.15) * 1.8 + 32).toFixed(2);
            const wind = data.wind.speed;
            const humidity = data.main.humidity;
            createTemperature.textContent = `${temperature} ºF`;
            createWind.textContent = `${wind} MPH`;
            createHumidity.textContent = `${humidity}%`;
            currentDate.append(` ${icon}`);
            displayList.append(createTemperature);
            displayList.append(createWind);
            displayList.append(createHumidity)
        })
};

//reading the data comingn from the weather forecast PI
function findWeather() {
    fetch(weatherUrl)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            console.log(data);
            for (let i = 4; i <data.list.length; i += 8) {
                const displayList = document.getElementById(i);
                const createIcon = document.createElement("li");
                const createTemperature = document.createElement("li");
                const createWind = document.createElement("li");
                const createHumidity = document.createElement("li");
                const icon = data.list[i].weather[0].icon;
                if (icon === "01d") {
                    createIcon.textContent = "01d";
                } else if (icon === "02d") {
                    createIcon.textContent = "02d";
                } else if (icon === "03d") {
                    createIcon.textContent = "03d";
                } else if (icon === "04d") {
                    createIcon.textContent = "04d";
                } else if (icon === "09d") {
                    createIcon.textContent = "09d";
                } else if (icon === "10d") {
                    createIcon.textContent = "10d";
                } else if (icon === "11d") {
                    createIcon.textContent = "11d";
                } else if (icon === "13d") {
                    createIcon.textContent = "13d";
                } else if (icon === "50d") {
                    createIcon.textContent = "50d";
                } else if (icon === "01n") {
                    createIcon.textContent = "01n";
                } else if (icon === "02n") {
                    createIcon.textContent = "02n";
                } else if (icon === "03n") {
                    createIcon.textContent = "03n";
                } else if (icon === "04n") {
                    createIcon.textContent = "04n";
                } else if (icon === "09n") {
                    createIcon.textContent = "09n";
                } else if (icon === "10n") {
                    createIcon.textContent = "10n";
                } else if (icon === "11n") {
                    createIcon.textContent = "11n";
                } else if (icon === "13n") {
                    createIcon.textContent = "13n";
                } else if (icon === "50n") {
                    createIcon.textContent = "50n";
                } else {
                    createIcon.textContent = "Not able to display"
                }
                const temperature = ((data.list[i].main.temp - 273.15) * 1.8 + 32).toFixed(2);
                const wind = data.list[i].wind.speed;
                const humidity = data.list[i].main.humidity;
                createTemperature.textContent = `${temperature} ºF`;
                createWind.textContent = `${wind} MPH`;
                createHumidity.textContent = `${humidity}%`;
                displayList.append(createIcon);
                displayList.append(createTemperature);
                displayList.append(createWind);
                displayList.append(createHumidity);
        }
    })
};
currentWeather();
findWeather();