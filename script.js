$(document).ready(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        $("#location").text("Your location: " + latitude + ", " + longitude);
      });
    } else {
      $("#location").text("Geolocation is not supported by this browser.");
    }
  });


  $(document).ready(function() {
    // Check if the user's name exists in sessionStorage
    var username = sessionStorage.getItem("username");

    if (username) {
        // Display a welcome message to the user
        $("#welcomeMsg").text("Welcome back, " + username + "!");
    } else {
        // Prompt the user to enter their name
        username = prompt("Please enter your name:");

        if (username) {
            // Save the user's name in sessionStorage
            sessionStorage.setItem("username", username);

            // Display a welcome message to the user
            $("#welcomeMsg").text("Welcome, " + username + "!");
        }
    }
});
