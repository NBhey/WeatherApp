import { getWeatherAndIcon } from "./weather";


window.alert = jest.fn();
const data ={
    coord: {
      lon: 39.7139,
      lat: 47.2364
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d"
      }
    ],
    base: "stations",
    main: {
      temp: 18.25,
      feels_like: 17.59,
      temp_min: 17.94,
      temp_max: 20.05,
      pressure: 1008,
      humidity: 56
    },
    visibility: 10000,
    wind: {
      speed: 4.47,
      deg: 225,
      gust: 6.71
    },
    clouds: {
      all: 100
    },
    dt: 1713707927,
    sys: {
      type: 2,
      id: 48928,
      country: "RU",
      sunrise: 1713666087,
      sunset: 1713716266
    },
    timezone: 10800,
    id: 501175,
    name: "Rostov-on-Don",
    cod: 200
  } ;
  
global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(data)
  });

describe("Get city's weather and icon", ()=>{ 
    it('get weather and icon', async  () => {
       const temp = await getWeatherAndIcon('Rostov-on-Don')
       let arr = [];
       arr.push(Math.round(data.main.temp), data.weather[0].icon, data.coord)
       expect(temp).toEqual(arr);
    });
   
    it('uncorrect city', async ()=>{
       global.fetch.mockReset();
       const city = 'Rostova-on-Don';
       await getWeatherAndIcon(city);
       expect(window.alert).toHaveBeenCalledWith(`Некорректно введен город: ${city}`);
    })
})