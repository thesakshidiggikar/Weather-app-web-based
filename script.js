function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const weatherInfo = document.getElementById("weatherInfo");

    const city = cityInput.value;
    const apiKey = "46f93dd1d432d1cd0ebe02c278984f8d"; // Replace with your actual API key from OpenWeatherMap.

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.main && data.weather && data.weather[0]) {
                cityName.textContent = `City: ${data.name}`;
                temperature.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
                description.textContent = `Weather: ${data.weather[0].description}`;
                weatherInfo.style.display = "block";
            } else {
                console.error("Error: Data structure from the API is not as expected.");
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
}
