const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "17.jpeg",
  "18.jpeg",
  "19.jpeg",
  "20.jpeg",
  "21.jpeg",
  "22.jpeg",
  "23.jpeg",
  "24.jpeg",
  "25.jpeg",
  "26.jpeg",
];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const b_hours = new Date().getHours();
console.log(b_hours);
const chosenImgae = "";
if (b_hours >= 4 && b_hours < 12) {
  // 오전 4시 - 정오 사이(아침)
  chosenImage = images[getRandomInt(0, 5)];
} else if (b_hours >= 12 && b_hours < 17) {
  //정오 - 오후 5시 사이(낮)
  chosenImage = images[getRandomInt(6, 10)];
} else if (b_hours >= 17 && b_hours < 20) {
  //오후 5시 - 오후 8시 사이(저녁)
  chosenImage = images[getRandomInt(11, 15)];
} else {
  //그 외(오후8시-오전4시. 밤)
  chosenImage = images[getRandomInt(16, 26)];
}

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
