
import { getUserIp } from "./ip.js"
import { getWeatherAndIcon } from "./weather.js";
import { drawCityList } from "./city-list.js";
import { saveList, readList  } from "./localStorage.js";
import { initMap } from "./map.js";
import "./style/style.css"

console.log("Я подключен");

// Ищем элементы по странице
const city = document.querySelector('.city');
const temp = document.querySelector('.temperature');
const img = document.querySelector('img');

// Отрисовываем данные пользователя
let myCity = await getUserIp();
drawTitleContent(myCity);
initMap(myCity);

export async function drawTitleContent(currentCity){
    try{
        currentCity = (typeof(currentCity) == 'object') ? currentCity.city : currentCity;
        city.textContent = currentCity;
        const tempAndIcon = await getWeatherAndIcon(currentCity);
        temp.textContent = `${tempAndIcon[0]}°C `;
        img.src = `http://openweathermap.org/img/wn/${tempAndIcon[1]}@2x.png`; 
    }catch(e){
        return
    }
}
  
// Список городов
const listCity = document.querySelector('.content__list')
const getCity = await readList();
drawCityList(listCity,getCity)


// Запрос пользователя 
const input = document.querySelector('.input')
const btn = document.querySelector('.btn');
 
btn.addEventListener('click', async () => {
    let value = input.value.trim();
    if (value === "") {
        alert("Проверьте, что Вы ввели город")
    } else {
        drawTitleContent(value);
        input.value = "";
        getCity.push(value);
        drawCityList(listCity, getCity);
        saveList(getCity);
        initMap(value);
    }  
    
})


