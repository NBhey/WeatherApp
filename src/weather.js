const API_KEY = "484a6ef87b65accb9fe4d2a88685c6ff";

export async function getWeatherAndIcon(city) {
  city = typeof city == "object" ? city.city : city;
  try {
    const resCity = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
    const parseResCity = await resCity.json();
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${parseResCity[0].lat}&lon=${parseResCity[0].lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return [Math.round(data.main.temp), data.weather[0].icon, data.coord];
  } catch (err) {
    return;
  }
}
