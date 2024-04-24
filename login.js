function submitForm() {
  // Get values from input fields
  event.preventDefault();
  var name = document.getElementById("fullName").value;
  var phoneno = document.getElementById("phoneNumber").value; // Keep as string
  var password = document.getElementById("password").value;

  if (name === "admin" && phoneno === "1234" && password === "admin") {
    console.log("Name:", name);
    console.log("Phone Number:", phoneno);
    console.log("Password:", password);
    window.location.href = "admin.html"; // Redirect to admin page
  } else {
    window.location.href = "index.html"; // Redirect to index page
  }
}

// document.addEventListener("DOMContentLoaded", function () {
function timezero() {}

// Defined timenotzero function here to fix the reference error
function timenotzero() {}

// Call the countdown function when the DOM content is loaded
countdown();

function countdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1); // Next day
  targetDate.setHours(0, 0, 0, 0); // Reset to midnight

  const interval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
      clearInterval(interval);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // // Convert hours to 12-hour system
    // let ampm = hours >= 12 ? "PM" : "AM";
    // hours = hours % 12;
    // hours = hours ? hours : 12; // Handle midnight (0) as 12

    // Select all elements with the class names "days", "hours", "minutes", and "seconds"
    const daysElements = document.querySelectorAll(".days");
    const hoursElements = document.querySelectorAll(".hours");
    const minutesElements = document.querySelectorAll(".minutes");
    const secondsElements = document.querySelectorAll(".seconds");

    // Update each element individually
    daysElements.forEach((element) => {
      element.innerText = formatTime(days);
    });
    hoursElements.forEach((element) => {
      element.innerText = formatTime(hours);
    });
    minutesElements.forEach((element) => {
      element.innerText = formatTime(minutes);
    });
    secondsElements.forEach((element) => {
      element.innerText = formatTime(seconds);
    });

    // Check if the current time is between 00:00:00 and 00:10:00
    if (hours === 0 && minutes >= 0 && minutes < 10) {
      // Generate an alert
      timezero();
    } else {
      // Use the defined timenotzero function here
      timenotzero();
    }
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}
