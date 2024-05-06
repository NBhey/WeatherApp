export async function getUserIp() {
  try {
    const response = await fetch(`https://get.geojs.io/v1/ip/geo.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    alert("Данные не пришли,попробуйте еще раз");
  }
}
