const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=43.5788&lon=-116.5598&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3";

function findWeather() {
    fetch(weatherUrl)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            console.log(data);
        })
};

findWeather();