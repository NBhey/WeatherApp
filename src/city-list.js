// Лист с городами пользователя
import { drawTitleContent } from "./index.js";
import { initMap } from "./map.js";

export function drawCityList(el, items) {
  for (let i = 0; i < items.length; i++) {
    if (items.length === 11) {
      items.splice(0, 1);
    }
  }
  el.innerHTML = items.map((el) => `<li>${el}</li>`).join("");
  for (let i = 0; i < el.children.length; i++) {
    el.children[i].addEventListener("click", (e) => {
      e.preventDefault();
      drawTitleContent(el.children[i].textContent);
      console.log(drawTitleContent(el.children[i].textContent));
      initMap(el.children[i].textContent);
    });
  }
}
