//a script that will update time in the clock div realtime
let clock = document.getElementById('clock');
let date = document.getElementById('date');
let greetings = document.getElementById('greetings');
let background = document.getElementsByClassName('wrapper');

function updateClock() {
    new Date().toLocaleTimeString();
    //show time in 12 hrs format with leading 0 and no am or pm
    let time = new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' });
    clock.innerHTML = time.substring(0, 5);
    //update date
    let today = new Date();
    //get date
    let day = today.getDate();
    //get month in text
    let month = today.toLocaleString('default', { month: 'short' });
    //get weekday in text
    let weekday = today.toLocaleString('default', { weekday: 'long' });
    date.innerHTML = weekday + ', ' + month + ' ' + day;
    adjustOpacity();
}

function randomColors() {
    //generate 3 random colors at the start and add them to root variables of css
    //make sure the colors are not too dark or too light
    let color1 = 'hsl(' + Math.floor(Math.random() * 360) + ', 100%, 50%)';
    let color2 = 'hsl(' + Math.floor(Math.random() * 360) + ', 100%, 50%)';
    let color3 = 'hsl(' + Math.floor(Math.random() * 360) + ', 100%, 50%)';

    document.documentElement.style.setProperty('--color-primary', color1);
    document.documentElement.style.setProperty('--color-secondary', color2);
    document.documentElement.style.setProperty('--color-tertiary', color3);
}

//open the form on dragging of the refresh button
refresh.addEventListener('click', function () {
    let form = document.getElementById('user-input');
    form.style.display = 'block';
    //load current data from storage to the form
    let city = localStorage.getItem('city');
    let name = localStorage.getItem('name');
    document.getElementById('city').value = city;
    document.getElementById('name').value = name;
}
);

//generate random greetings with time
function greetingsGenerator() {
    //read users name from local storage
    let username = localStorage.getItem('name');
    let today = new Date(); 
    let hour = today.getHours();
    let greetingsText = '';
    if (hour >= 5 && hour < 12) {
        greetingsText = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        greetingsText = 'Good afternoon';
    } else if (hour >= 17 && hour < 21) {
        greetingsText = 'Good evening';
    } else {
        greetingsText = 'Good night';
    }
    greetings.innerHTML = greetingsText + ', ' + username + '!';
}

//adjust the opacity of background div .wrapper according to the time
function adjustOpacity() {
    let today = new Date();
    let hour = today.getHours();
    let opacity = 0;
    if (hour >= 6 && hour < 9) {
        opacity = 0.5;
    } else if (hour >= 9 && hour < 17) {
        opacity = 1.0;
    } else if (hour >= 16 && hour < 21) {
        opacity = 0.5;
    } else {
        opacity = 0.2;
    }
    background[0].style.opacity = opacity;
}

//refresh colors page on click on clock
clock.addEventListener('click', function () {
    randomColors();
}
);

randomColors();
setInterval(updateClock, 1000);
setInterval(greetingsGenerator, 1000);
