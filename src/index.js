function dooo(event) {
  event.preventDefault();
  let b = document.querySelector("#search-form-input");
  let c = document.querySelector("#city");
  c.innerHTML = b.value;
}

let a = document.querySelector("#search");
a.addEventListener("submit", dooo);
