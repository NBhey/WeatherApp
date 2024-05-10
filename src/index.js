import { getUserIp } from "./ip.js";
import { getWeatherAndIcon } from "./weather.js";
import { drawCityList } from "./city-list.js";
import { saveList, readList } from "./localStorage.js";
import { initMap } from "./map.js";
import "./style/style.css";

console.log("Я подключен");

// Ищем элементы по странице
const city = document.querySelector(".city");
const temp = document.querySelector(".temperature");
const img = document.querySelector("img");

// Отрисовываем данные пользователя
let myCity = await getUserIp();
drawTitleContent(myCity);
initMap(myCity);

export async function drawTitleContent(currentCity) {
  try {
    currentCity =
      typeof currentCity == "object" ? currentCity.city : currentCity;
    const tempAndIcon = await getWeatherAndIcon(currentCity);
    if (tempAndIcon == undefined) {
      return "error";
    }
    city.textContent = currentCity;
    temp.textContent = `${tempAndIcon[0]}°C `;
    img.src = `http://openweathermap.org/img/wn/${tempAndIcon[1]}@2x.png`;
  } catch (e) {
    return null;
  }
}

// Список городов
const listCity = document.querySelector(".content__list");
const getCity = await readList();
drawCityList(listCity, getCity);

// Запрос пользователя
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let value = input.value.trim().toLowerCase();
  if (value === "") {
    alert("Проверьте, что Вы ввели город");
  } else if ((await drawTitleContent(value)) === "error") {
    input.value = "";
    return alert(`Проверьте, что Вы корректно ли  указали город: ${value}`);
  } else if (getCity.includes(value) == true) {
    drawTitleContent(value);
    initMap(value);
    input.value = "";
  } else {
    console.log(getCity.includes(value) == true);
    drawTitleContent(value);
    input.value = "";
    getCity.push(value);
    drawCityList(listCity, getCity);
    saveList(getCity);
    initMap(value);
  }
});
