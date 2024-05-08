const API_KEY = "fd185eec875c277bc16bccdb3629b6af";

export async function getWeatherAndIcon(city) {
  city = typeof city == "object" ? city.city : city;
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return [Math.round(data.main.temp), data.weather[0].icon, data.coord];
  } catch (err) {
    return 
  }
}
