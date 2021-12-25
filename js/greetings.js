const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";

clock_1 = document.querySelector("#clock");
todo_form = document.querySelector("#todo-form");
quote_greetings = document.querySelector("#quote");
weather = document.querySelector("#weather");

function onLoginSubmit(event) {
  //submit이 되면,
  event.preventDefault(); //새로고침 방지
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //유저 이름 local storage에 저장
  paintGreetings();

  loginForm.classList.add(CLASS_HIDDEN);
  clock_1.classList.remove(CLASS_HIDDEN);
  todo_form.classList.remove(CLASS_HIDDEN);
  quote_greetings.classList.remove(CLASS_HIDDEN);
  weather.classList.remove(CLASS_HIDDEN);
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);

  const date = new Date();
  const hours = date.getHours();
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
  //만약 savedUsername이 null이면
  let toDos = []; //혹시 모를 에러 방지를 위해 초기화

  //시간, todo form, quote, 날씨 다 숨기고
  clock_1.classList.add(CLASS_HIDDEN);
  todo_form.classList.add(CLASS_HIDDEN);
  quote.classList.add(CLASS_HIDDEN);
  weather.classList.add(CLASS_HIDDEN);

  loginForm.classList.remove(CLASS_HIDDEN); //login form은 보여주고
  loginForm.addEventListener("submit", onLoginSubmit); //event listener
} else {
  loginForm.classList.add(CLASS_HIDDEN);
  paintGreetings();
  setInterval(paintGreetings, 6000000); //10분에 한 번 시간 체크, greeting message업데이트(너무 자주 할 필요 없음)
}
