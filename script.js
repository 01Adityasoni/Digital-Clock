const clock = document.querySelector('#clock'); // Select the clock element
//const clock = document.getElementById('clock'); // Alternative way to select the clock element

setInterval(function () {// Update the clock every second
    let date = new Date();// Get the current date and time
    clock.innerHTML = date.toLocaleTimeString();// Format the time as a locale-specific string and display it
}, 1000)// 1000 milliseconds = 1 second , means it runs this method after every 1 second