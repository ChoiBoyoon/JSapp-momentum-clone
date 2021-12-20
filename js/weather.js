const API_KEY = "c3d928645f323fba6bf6b39b557baccf";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:nth-child(2)");
      const weather = document.querySelector("#weather i");
      temp.innerText = data.main.temp + "°";
      city.innerText = data.name;

      if (data.weather[0].main === "Clouds") {
        weather.classList.add("fas fa-cloud fa-lg");
        weather.innerText = data.weather[0].main;
      }
    });
}

function onGeoError() {
  alert("error! can't find you. No weather for you ;(");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

//my latitude : 2.3316439
//my longitude : 48.809587
