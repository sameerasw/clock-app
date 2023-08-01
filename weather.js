//get weather from openweathermap.org with provided API key and retriew data to the weather div in html

let weather = document.getElementById('weather');
let form = document.getElementById('user-input');

//read the api key and city from local storage, if not found, show the user-input form
let apiKey = localStorage.getItem('apiKey');
let city = localStorage.getItem('city');

if (apiKey == null || city == null) {
    form.style.display = 'block';
} else {
    form.style.display = 'none';
}

form.addEventListener('submit', function () {
    city = document.getElementById('city').value.toLowerCase();
    apiKey = document.getElementById('api').value;
    let name = document.getElementById('name').value;
    localStorage.setItem('city', city);
    localStorage.setItem('apiKey', apiKey);
    localStorage.setItem('name', name);
    //hide the form
    form.style.display = 'none';
    //refresh the page
    location.reload();
});

function getWeather() {
    let apiKey = localStorage.getItem('apiKey');
    let city = localStorage.getItem('city');
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let temp = data.main.temp;
            let description = data.weather[0].description;
            let icon = data.weather[0].icon;
            let iconUrl = 'http://openweathermap.org/img/wn/' + icon + '.png';
            weather.innerHTML = temp + '°C   ' + description + '<img src="' + iconUrl + '">';
        });
}

//update weather every 3 hours
getWeather();
setInterval(getWeather, 10800000);