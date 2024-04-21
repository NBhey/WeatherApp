import { getUserIp } from "./ip.js"
import { getWeatherAndIcon } from "./weather.js";
import "./style/style.css"

console.log("Я подключен");

let city = document.querySelector('.city');
let temp = document.querySelector('.temperature');
let img = document.querySelector('img');

async function draw(currentCity){
    currentCity = (typeof(currentCity) == 'object') ? currentCity.city : currentCity;
    city.textContent = currentCity;
    const tempAndIcon = await getWeatherAndIcon(currentCity);
    temp.textContent = tempAndIcon[0];
    img.src = `http://openweathermap.org/img/wn/${tempAndIcon[1]}@2x.png`; 
}
draw(await getUserIp());