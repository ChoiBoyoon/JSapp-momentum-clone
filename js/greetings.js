const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();

  loginForm.classList.add(CLASS_HIDDEN);
  clock_1.classList.remove(CLASS_HIDDEN);
  todo_form.classList.remove(CLASS_HIDDEN);
  quote.classList.remove(CLASS_HIDDEN);
  weather.classList.remove(CLASS_HIDDEN);
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);

  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  hours = parseInt(hours);
  if (hours >= 4 && hours < 12) {
    greeting.innerText = "Good morning, " + username + ".";
  } else if (hours >= 12 && hours < 17) {
    greeting.innerText = "Good afternoon, " + username + ".";
  } else if (hours >= 17 || hours < 4) {
    greeting.innerText = "Good evening, " + username + ".";
  } else {
    greeting.innerText = "Hello, " + username + ".";
  }
  greeting.classList.remove(CLASS_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  let toDos = [];
  clock_1 = document.querySelector("#clock");
  clock_1.classList.add(CLASS_HIDDEN);
  todo_form = document.querySelector("#todo-form");
  todo_form.classList.add(CLASS_HIDDEN);
  quote = document.querySelector("#quote");
  quote.classList.add(CLASS_HIDDEN);
  weather = document.querySelector("#weather");
  weather.classList.add(CLASS_HIDDEN);

  loginForm.classList.remove(CLASS_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(CLASS_HIDDEN);
  paintGreetings();
  setInterval(paintGreetings, 6000000); //10분에 한 번 시간 체크, greeting message업데이트(너무 자주 할 필요 없음)
}
