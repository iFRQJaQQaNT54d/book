const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeather API Key

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  
  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.cod === '404') {
      alert('City not found');
      return;
    }

    displayWeather(data);
  } catch (error) {
    alert('Error fetching weather data');
  }
}

function displayWeather(data) {
  const weatherContainer = document.getElementById('weatherData');
  weatherContainer.innerHTML = `
    <div class="weather-card">
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    </div>
  `;
}
