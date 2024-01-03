function updateDateTime() {
    var dateTimeElement = document.getElementById("dateTime");
    var currentDate = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    var formattedDateTime = currentDate.toLocaleDateString('en-US', options);

    dateTimeElement.textContent = formattedDateTime;
  }

  // Call the function initially
  updateDateTime();

  // Set up a timer to update the date and time every second
  setInterval(updateDateTime, 1000);