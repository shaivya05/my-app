function refresh(response) {
  console.log(response.data);
  let date=new Date(response.data.time * 1000);
  let t = document.querySelector("#value-temp");
  let temp = response.data.temperature.current;
  t.innerHTML = Math.round(temp);
  let c = document.querySelector("#city");
  c.innerHTML = response.data.city;
  let d=document.querySelector("#desc");
  d.innerHTML=response.data.condition.description;
  let e=document.querySelector("#hum");
  e.innerHTML=response.data.temperature.humidity;
  let f = document.querySelector("#speed");
  f.innerHTML = response.data.wind.speed;
  let g = document.querySelector("#time");
   g.innerHTML=formatDate(date);
}
// Tuesday 14:49
function formatDate(date)
{  let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];
    let hours=date.getHours();
    let minutes=date.getMinutes();
     if (minutes < 10) {
       minutes = `0${minutes}`;
     }
      return `${day} ${hours}:${minutes}`;
}
function searchCity(city) {
  let api = "5001994a3a9f98fb4t8c2o6a0bc2953d";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${api}`;
  axios.get(apiURL).then(refresh);
}

function dooo(event) {
  event.preventDefault();
  let b = document.querySelector("#search-form-input");
  let c = document.querySelector("#city");
  //   c.innerHTML = b.value;
  searchCity(b.value);
}

let a = document.querySelector("#search");
a.addEventListener("submit", dooo);
searchCity("lisbon");
