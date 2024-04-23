// Лист с городами пользователя 
import { drawTitleContent } from "./index.js";
import { initMap } from "./map.js";

export function drawCityList(el, items){
    for (let i = 0; i < items.length; i++){
        if (items.length === 10){
            items.splice(0,1)
        }
    }
    el.innerHTML = items.map((el) => `<li>${el}</li>`).join("");
    console.log(el.children.children)
    for (let i = 0; i < el.children.length; i++) {
        console.log(el.children[i].textContent);
        el.children[i].addEventListener("click", (e) => {
          e.preventDefault();
          drawTitleContent(el.children[i].textContent);
          initMap(el.children[i].textContent)
        });
      }
}

