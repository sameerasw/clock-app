//a script that will update time in the clock div realtime
let clock = document.getElementById('clock');

function updateClock() {
    new Date().toLocaleTimeString();
    //format the time to 12 hour format and no am,pm
    let time = new Date().toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
    clock.innerHTML = time;
}

setInterval(updateClock, 1000);

//refresh page on long press on clock
clock.addEventListener('mousedown', function (e) {
    if (e.detail > 1) {
        window.location.reload();
    }
}
);