
import { getWeatherAndIcon } from "./weather";

let Map;

export async function initMap(city) {
    let coord = await getWeatherAndIcon(city)
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;
    if (!Map){
      Map = new YMap(document.getElementById("map"), {
        location: {
          center: [coord[2].lon,coord[2].lat],
          zoom: 10,
        },
      });
      Map.addChild(new YMapDefaultSchemeLayer());
    } else {
      Map.setLocation({ center: [coord[2].lon,coord[2].lat], zoom: 10 });
    }
   
  }