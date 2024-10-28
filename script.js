// const apiKey = 'd21104b5c285df00223f16db5a16a25e'; // Reemplaza con tu API Key de OpenWeatherMap

// document.getElementById('checkWeather').addEventListener('click', function () {
//     const city = document.getElementById('cityInput').value;
//     if (city) {
//         getRainProbability(city);
//     } else {
//         alert('Please enter a city name');
//     }
// });

// function getRainProbability(city) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             if (data.cod === 200) {
//                 displayRainProbability(data);
//             } else {
//                 document.getElementById('weatherResult').innerText = 'City not found. Please try again.';
//             }
//             console.log(data.main.temp);
            
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//             document.getElementById('weatherResult').innerText = 'Error fetching weather data.';
//         });
// }

// function displayRainProbability(data) {
//     const cityName = data.name;
//     const weatherDesc = data.weather[0].description;
//     const rainProbability = data.rain ? data.rain['1h'] || data.rain['3h'] : 0; // Probabilidad de lluvia en 1h o 3h
//     const result = `
//         <h2>Weather in ${cityName}</h2>
//         <p>Condition: ${weatherDesc}</p>
//         <p>Rain Probability (last 1h or 3h): ${rainProbability ? rainProbability + '%' : 'No data available'}</p>
//     `;

//     document.getElementById('weatherResult').innerHTML = result;
// }
