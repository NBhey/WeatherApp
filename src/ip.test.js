import { getUserIp } from "./ip"
 
const data = {
  "latitude": "47.2361",
  "longitude": "39.7189",
  "accuracy": 5,
  "timezone": "Europe/Moscow",
  "country_code": "RU",
  "organization": "AS57378 JSC ER-Telecom Holding",
  "asn": 57378,
  "ip": "94.180.60.12",
  "area_code": "0",
  "organization_name": "JSC ER-Telecom Holding",
  "city": "Rostov-on-Don",
  "country_code3": "RUS",
  "continent_code": "EU",
  "country": "Russia",
  "region": "Rostov Oblast",
  // "name":"James" for test
}

describe('get Ip', ()=>{
  
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(data)
    });


  it('return User city', async () => {
   let dataTest = await getUserIp();
    expect(dataTest).toEqual(data);
  });
 
});

