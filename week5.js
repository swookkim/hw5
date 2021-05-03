// Goal: Implement a weather application using data from an external API
// - Signup for an api key @ https://weatherapi.com
// - The API takes three inputs (querystring parameters)
//   - key = your API key
//   - q = a location query (e.g. Chicago)
//   - days = number of days of forecast data to return, between 1-10
// - Example: https://api.weatherapi.com/v1/forecast.json?key=YOUR-API-KEY&q=Chicago&days=3
// - The basic recipe (algorithm) is included; write the rest of the recipe in the comments!
// - Lab: Follow the provided recipe and the "mock-up" provided in the hard-coded HTML; respond 
//        to the user filling out the location on the form by fetching the weather API and 
//        displaying the city/state, e.g. if the user enters "chicago" on the form, show "Current
//        Weather for Chicago, Illinois".
// - Homework: Complete the application by accepting a number of days; show the current weather 
//             conditions and forecast based on the number of days entered by the user.

window.addEventListener('DOMContentLoaded', async function() {
  // Get a reference to the "get weather" button

  // When the "get weather" button is clicked:

    // - Ignore the default behavior of the button

    // - Get a reference to the element containing the user-entered location

    // - Get the user-entered location from the element's value

    // - Check to see if the user entered anything; if so:

      // - Construct a URL to call the WeatherAPI.com API

      // - Fetch the url, wait for a response, store the response in memory

      // - Ask for the json-formatted data from the response, wait for the data, store it in memory

      // - Write the json-formatted data to the JavaScript console

      // - Store the interpreted location, current weather conditions, the forecast as three separate variables

      // - Continue the recipe yourself!
})