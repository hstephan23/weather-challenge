window.addEventListener("DOMContentLoaded", () => {
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
                const displayList = document.getElementById("current");
                const createTemperature = document.createElement("li");
                const createWind = document.createElement("li");
                const createHumidity = document.createElement("li");
                const iconImage = document.createElement("img");
                const icon = data.weather[0].icon;
                const temperature = ((data.main.temp -273.15) * 1.8 + 32).toFixed(2);
                const wind = data.wind.speed;
                const humidity = data.main.humidity;
                createTemperature.textContent = `${temperature} ºF`;
                createWind.textContent = `${wind} MPH`;
                createHumidity.textContent = `${humidity}%`;
                if (icon === "01d") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "02d") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "03d") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "04d") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "09d") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "10d") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "11d") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "13d") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "50d") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "01n") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/01n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "02n") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/02n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "03n") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/03n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "04n") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/04n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "09n") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/09n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "10n") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/10n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "11n") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/11n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "13n") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/013n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else if (icon === "50n") {
                    iconImage.setAttribute("src", "http://openweathermap.org/img/wn/50n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    currentDate.append(iconImage);
                } else {
                    currentDate.append("Not able to display");
                }
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
                for (let i = 4; i <data.list.length; i += 8) {
                    const displayList = document.getElementById(i);
                    const createIcon = document.createElement("li");
                    const iconImage = document.createElement("img");
                    const createTemperature = document.createElement("li");
                    const createWind = document.createElement("li");
                    const createHumidity = document.createElement("li");
                    const icon = data.list[i].weather[0].icon;
                    if (icon === "01d") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "02d") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/02d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "03d") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/03d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "04d") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "09d") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "10d") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "11d") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "13d") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "50d") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "01n") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/01n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "02n") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/02n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "03n") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/03n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "04n") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/04n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "09n") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/09n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "10n") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/10n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "11n") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/11n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "13n") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/013n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
                    } else if (icon === "50n") {
                        iconImage.setAttribute("src", "http://openweathermap.org/img/wn/50n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        createIcon.append(iconImage);
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
});