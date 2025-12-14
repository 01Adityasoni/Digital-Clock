// Old code (kept for reference):
// const clock = document.querySelector('#clock'); // Select the clock element
// //const clock = document.getElementById('clock'); // Alternative way to select the clock element
// setInterval(function () { // Update the clock every second
//     let date = new Date(); // Get the current date and time
//     clock.innerHTML = date.toLocaleTimeString(); // Format the time as a locale-specific string and display it
// }, 1000); // 1000 milliseconds = 1 second , means it runs this method after every 1 second

// New enhanced code:
const clock = document.querySelector('#clock');
let is24Hour = false;

function updateClock() {
    const date = new Date();
    let timeString;
    if (is24Hour) {
        // 24-hour format
        timeString = date.toLocaleTimeString([], { hour12: false });
    } else {
        // 12-hour format
        timeString = date.toLocaleTimeString([], { hour12: true });
    }
    clock.innerHTML = timeString;
}

setInterval(updateClock, 1000);
updateClock();

// Toggle 12/24 hour format
const toggleFormatBtn = document.getElementById('toggleFormat');
if (toggleFormatBtn) {
    toggleFormatBtn.addEventListener('click', function() {
        is24Hour = !is24Hour;
        toggleFormatBtn.textContent = is24Hour ? 'Switch to 12h' : 'Switch to 24h';
        updateClock();
    });
}

// Theme toggling
const toggleThemeBtn = document.getElementById('toggleTheme');
let darkTheme = true;
if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener('click', function() {
        darkTheme = !darkTheme;
        if (darkTheme) {
            document.body.style.background = 'linear-gradient(135deg, #232526 0%, #414345 100%)';
            clock.style.color = '#00ffe7';
            clock.style.background = 'rgba(20, 20, 30, 0.7)';
            clock.style.border = '2px solid #00ffe7';
            clock.style.textShadow = '0 0 20px #00ffe7, 0 0 40px #00ffe7';
        } else {
            document.body.style.background = 'linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)';
            clock.style.color = '#232526';
            clock.style.background = 'rgba(255,255,255,0.7)';
            clock.style.border = '2px solid #43c6ac';
            clock.style.textShadow = '0 0 10px #43c6ac, 0 0 20px #f8ffae';
        }
    });
}