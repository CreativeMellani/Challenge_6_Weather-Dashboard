

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

const button = document.querySelector('.subButton')
const inputValue = document.querySelector('.inputvalue')
const name = document.querySelector('.name')
const description = document.querySelector('.description')
const temperature = document.querySelector('.temperature')

fetch('
https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={c40f0425127ac871d43429862b4eda07}')

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city