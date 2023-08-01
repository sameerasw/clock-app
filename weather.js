//get weather from openweathermap.org with provided API key and retriew data to the weather div in html

let weather = document.getElementById('weather');

function getWeather() {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=d280b8d8145a073ea17e30d81ec7b1f3';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let temp = data.main.temp;
            let description = data.weather[0].description;
            let icon = data.weather[0].icon;
            let iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';
            weather.innerHTML = temp + '°C' + '<br>' + description + '<br>' + '<img src="' + iconUrl + '">';
        });
}

getWeather();