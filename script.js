//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    var browserInfoDiv = document.getElementById('browser-info');

    // Get browser information from the navigator object
    var browserName = navigator.appName;
    var browserVersion = navigator.appVersion;

    // Display the information in the div
    browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
});
