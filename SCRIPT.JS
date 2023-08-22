const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '71a5776dd3msh0af0478cc7e77a3p106ac4jsn0b07b52d43b8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchWeatherData(cityName) {
	
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;
        
    try {
		const cityNameElement = document.getElementById("cityName"); // Assuming you have an HTML element with id="cityName"
		cityNameElement.innerHTML = cityName;

        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        
        cloud_pct.innerHTML = result.cloud_pct;
        temp.innerHTML = result.temp;
        temp2.innerHTML = result.temp;
        feels_like.innerHTML = result.feels_like;
        humidity.innerHTML = result.humidity;
        humidity2.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        wind_speed.innerHTML = result.wind_speed;
        wind_speed2.innerHTML = result.wind_speed;
        wind_degrees.innerHTML = result.wind_degrees;
        sunrise.innerHTML = result.sunrise;
        sunset.innerHTML = result.sunset;
    } catch (error) {
        console.error(error);
    }
}

const submit = document.getElementById("submit"); // Assuming you have an HTML element with id="submit"
const cityInput = document.getElementById("city"); // Assuming you have an HTML input element with id="city"

submit.addEventListener("click", (e) => {
	e.preventDefault();
	const cityName = cityInput.value; // Get the value from the input field
	fetchWeatherData(cityName);
});
