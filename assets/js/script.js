window.addEventListener("DOMContentLoaded", () => {
    //variables
    let cityName = "Nampa";
    let latitude = 43.5737361;
    let longitude = -116.559631;
    // const location = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3`;
    const today = new Date();
    let day = today.getDay();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const dates = document.getElementsByClassName("date");
    const combinedDate = `${month}/${day}/${year}`
    const currentDate = document.getElementById("date-location");
    const searchBar = document.getElementById("Search");
    const searchCity = document.getElementById("city");

    currentDate.textContent = `${cityName} ${combinedDate}`;

    for (let i = 0; i < dates.length; i++) {
        day++; 
        dates[i].textContent = `${month}/${day}/${year}`;
    }
    //add the event listener for the search bar
    searchBar.addEventListener("click", function (event) {
        event.preventDefault();
        cityName = searchCity.value;
        currentDate.textContent = `${cityName} ${combinedDate}`;
        location = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3`;
        fetch(location)
            .then (function (response) {
                return response.json();
            })
            .then (function (data) {
                clear();
                console.log(data);
                latitude = data[0].lat;
                longitude = data[0].lon;
                const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3`;
                const currentDayUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3`;
                currentWeather(currentDayUrl);
                findWeather(weatherUrl);
            });
    })
    let location = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3`;
    //reading the data from the the map API
    function chosenLocation() {
        fetch(location)
            .then (function (response) {
                return response.json();
            })
            .then (function (data) {
                console.log(data);
                latitude = data[0].lat;
                longitude = data[0].lon;
                const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3`;
                const currentDayUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=16a0d06fe2bb273f50b9f98ac2bdb5a3`;
                currentWeather(currentDayUrl);
                findWeather(weatherUrl);
            })
    };
    //reading the data coming from the current weather API
    function currentWeather(current) {
        fetch(current) 
            .then (function (response) {
                return response.json();
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
                createTemperature.setAttribute("class", "weatherList");
                createWind.setAttribute("class",  "weatherList");
                createHumidity.setAttribute("class", "weatherList");
                createTemperature.textContent = `${temperature} ºF`;
                createWind.textContent = `${wind} MPH`;
                createHumidity.textContent = `${humidity}%`;
                if (icon === "01d") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/01d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "02d") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/02d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "03d") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/03d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "04d") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/04d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "09d") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/09d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "10d") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/10d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "11d") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/11d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "13d") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/13d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "50d") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/50d@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "01n") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/01n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "02n") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/02n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "03n") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/03n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "04n") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/04n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "09n") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/09n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "10n") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/10n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "11n") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/11n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "13n") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/13n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else if (icon === "50n") {
                    iconImage.setAttribute("src", "https://openweathermap.org/img/wn/50n@2x.png");
                    iconImage.setAttribute("class", "icon");
                    iconImage.setAttribute("class", "weatherList");
                    displayList.append(iconImage);
                } else {
                    displayList.append("Not able to display");
                }
                displayList.append(createTemperature);
                displayList.append(createWind);
                displayList.append(createHumidity)
            })
    };

    //reading the data comingn from the weather forecast PI
    function findWeather(forecast) {
        fetch(forecast)
            .then (function (response) {
                return response.json();
            })
            .then (function (data) {
                for (let i = 0; i <data.list.length; i += 8) {
                    const displayList = document.getElementById(i);
                    const createIcon = document.createElement("li");
                    const iconImage = document.createElement("img");
                    const createTemperature = document.createElement("li");
                    const createWind = document.createElement("li");
                    const createHumidity = document.createElement("li");
                    createTemperature.setAttribute("class", "weatherList");
                    createWind.setAttribute("class",  "weatherList");
                    createHumidity.setAttribute("class", "weatherList");
                    createIcon.setAttribute("class", "weatherList");
                    const icon = data.list[i].weather[0].icon;
                    if (icon === "01d") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/01d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "02d") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/02d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "03d") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/03d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "04d") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/04d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "09d") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/09d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "10d") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/10d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "11d") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/11d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "13d") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/13d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "50d") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/50d@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "01n") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/01n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "02n") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/02n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "03n") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/03n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "04n") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/04n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "09n") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/09n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "10n") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/10n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "11n") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/11n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "13n") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/13n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
                        createIcon.append(iconImage);
                    } else if (icon === "50n") {
                        iconImage.setAttribute("src", "https://openweathermap.org/img/wn/50n@2x.png");
                        iconImage.setAttribute("class", "icon");
                        iconImage.setAttribute("class", "weatherList");
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
    
    function clear() {
        const clearClass = document.getElementsByClassName("weatherList");
        const elementsArray  = Array.from(clearClass);
        elementsArray.forEach((element) => {
            element.remove();
        })
        // console.log(clearClass);
        // for (let i = 0; i < clearClass.length; i++) {
        //     clearClass[i].remove();
        //     console.log(clearClass[i]);
        // };
    };
    chosenLocation();
});