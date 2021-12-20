const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(CLASS_HIDDEN);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);

  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  if (hours >= 4 && hours < 12) {
    greeting.innerText = "Good morning, " + username + ".";
  } else if (hours >= 12 && hours < 18) {
    greeting.innerText = "Good afternoon, " + username + ".";
  } else if (hours >= 18 && hours < 4) {
    greeting.innerText = "Good evening, " + username + ".";
  } else {
    greeting.innerText = "Hello, " + username + ".";
  }
  greeting.classList.remove(CLASS_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
  loginForm.classList.remove(CLASS_HIDDEN);
} else {
  paintGreetings();
}
