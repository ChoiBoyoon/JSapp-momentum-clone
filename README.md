# JSapp-momentum-clone

https://choiboyoon.github.io/JSapp-momentum-clone/

구현된 기능:
* <b>randomly display wallpaper.</b> (Math.random())
  * also, greeting messages vary depending on current time
* <b>displays current hour, minute</b> (used Date object & setInterval())
* randomly show quotes on the bottom of the screen.
* <b>manage to-do list.</b> add & delete & display. The list is stored on localStorage, in object format.
  * <b>add</b>: localStorage.setItem("todos",JSON.stringify(toDos));
  * <b>delete</b>: locate the element to be deleted by its id(randomly generated number).<br/>(const li = event.target.parentElement;<br/>
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  li.remove();)
  * <b>display</b>: <br/>function paintToDo(newToDo){<br/>...<br/>li.appendChild(span);<br/>li.appendChild(button);<br/>toDoList.appendChild(li);<br/>}


![스크린샷 2021-12-20 20 51 36](https://user-images.githubusercontent.com/22133824/146824487-b2446780-7904-4eae-9e38-180939c2b254.png)


Functions to be added:
* 시간대에 따라 randomly displayed되는 background의 종류가 달라지도록.(ex.아침: 떠오르는 태양, 저녁: 노을, 밤: 별이 빛나는 밤)
* 날씨 icon 추가 (맑음, 안개, 비)
* 화면 비율에 따라 다른 display가 출력되도록 (ex. 스마트폰, 태블릿)
* 시작페이지로 지정
* 배포 가능하도록 
* 사용자가 시간대에 따른 background 이미지 선택 가능하게.
* 날씨 icon 클릭 -> forecast 열람 가능
