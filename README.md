# JSapp-momentum-clone

https://choiboyoon.github.io/JSapp-momentum-clone/

구현된 기능:
* <b>randomly display wallpaper.</b> (Math.random())
* <b>displays current hour, minute</b> (used Date object & setInterval())
* randomly show quotes on the bottom of the screen.
* <b>manage to-do list.</b> add & delete & display. The list is stored on localStorage, in format of an object.
  * <b>add</b>: localStorage.setItem("todos",JSON.stringify(toDos));
  * <b>delete</b>: locate the element to be deleted by its id(randomly generated number).<br/>(const li = event.target.parentElement;<br/>
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  li.remove();)
  * <b>display</b>: <br/>function paintToDo(newToDo){<br/>...<br/>...<br/>li.appendChild(span);<br/>li.appendChild(button);<br/>toDoList.appendChild(li);<br/>}

![스크린샷 2021-12-20 20 51 36](https://user-images.githubusercontent.com/22133824/146824487-b2446780-7904-4eae-9e38-180939c2b254.png)
