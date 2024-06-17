function refresh(response) {
  console.log(response.data.temperature.current);

  let t = document.querySelector("#value-temp");
  let temp = response.data.temperature.current;
  t.innerHTML = Math.round(temp);
  let c = document.querySelector("#city");
  c.innerHTML = response.data.city;
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
