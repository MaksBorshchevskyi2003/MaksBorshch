var ordermenu = document.querySelectorAll('li');  //1

var item3 = ordermenu [1];
var item2 = ordermenu [2];
var ul = document.getElementsByClassName('menu');
ul[0].replaceChild(item3, item2);
ul[0].insertBefore(item2, item3);


var li = document.createElement('li');
ul[0].appendChild(li);
li.classList.add('menu-item');
li.innerText = "Пятый пункт" ;

var azaza = document.querySelectorAll('body');

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
var title = document.getElementById('title');


title.innerHTML = 'Мы продаем только подлиную технику Apple';

var div = document.getElementsByClassName('adv');
var colum = document.getElementsByClassName('column');
colum[1].removeChild(div[0]);
