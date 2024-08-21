const API_KEY = "fd185eec875c277bc16bccdb3629b6af";

export async function getWeatherAndIcon(city) {
  city = typeof city == "object" ? city.city : city;
  try {
    // const urlCity = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&format=json`);
    // const responseCity = await urlCity.json();
    // console.log(responseCity.results[0].latitude)
    // console.log(responseCity.results[0].longitude)
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${responseCity.results[0].latitude}&lon=${responseCity.results[0].longitude}&appid=${API_KEY}`;

    const resCity = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
    console.log(resCity);
    const parseResCity = await resCity.json();
    console.log(parseResCity);
    console.log(parseResCity[0].lat);
    console.log(parseResCity[0].lon);
    // console.log(resCity)
    // const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}&lang=ru}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${parseResCity[0].lat}&lon=${parseResCity[0].lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return [Math.round(data.main.temp), data.weather[0].icon, data.coord];
  } catch (err) {
    return;
  }
}
