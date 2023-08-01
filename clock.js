//a script that will update time in the clock div realtime
let clock = document.getElementById('clock');

function updateClock() {
    new Date().toLocaleTimeString();
    //show time in 12 hrs format with leading 0 and no am or pm
    let time = new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' });
    clock.innerHTML = time.substring(0, 5);
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

//refresh colors page on click on clock
clock.addEventListener('click', function () {
    randomColors();
}
);

randomColors();
setInterval(updateClock, 1000);

//refresh page on refresh click
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', function () {
    location.reload();
}
);