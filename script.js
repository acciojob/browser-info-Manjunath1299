function displayBrowserInfo() {
  // Get the user agent string
  const userAgent = navigator.userAgent;

  // Extract the browser name and version
  let browserName;
  let version = "";

  if (userAgent.includes("Firefox")) {
    browserName = "Mozilla Firefox";
  } else if (userAgent.includes("Chrome")) {
    browserName = "Google Chrome";
  } else if (userAgent.includes("Safari")) {
    browserName = "Apple Safari";
  } else if (userAgent.includes("Edge")) {
    browserName = "Microsoft Edge";
  } else if (userAgent.includes("Opera")) {
    browserName = "Opera";
  } else {
    browserName = "Unknown Browser";
  }

  // Extract version number if available
  if (browserName !== "Unknown Browser") {
    const versionMatch = userAgent.match(/(Chrome|Firefox|Safari|Edge|Opera)\/(\d+(\.\d+)?)/);
    if (versionMatch) {
      version = versionMatch[2];
    }
  }

  // Create the message
  const message = "You are using " + browserName + " version " + version;

  // Get the div element to display the message
  const browserInfoDiv = document.getElementById("browser-info");

  // Display the message
  browserInfoDiv.textContent = message;
}

// Call the function to display the information immediately
displayBrowserInfo();
