"use strict"

let pictures = '[{"imgUrl": "images/1.png"},{"imgUrl": "images/2.png"},{"imgUrl": "images/3.png"},{"imgUrl": "images/4.png"},{"imgUrl": "images/5.png"},{"imgUrl": "images/6.png"},{"imgUrl": "images/7.png"},{"imgUrl": "images/8.png"},{"imgUrl": "images/9.png"},{"imgUrl": "images/10.png"},{"imgUrl": "images/11.png"},{"imgUrl": "images/12.png"}]';


pictures = JSON.parse(pictures);

let html = '';
for(let i=0; i < pictures.length; i++) {
  let pic = pictures[i]["imgUrl"];
  let div = document.createElement('div');
  div.innerHTML = `<img src="${pic}" draggable="true" />`;
  div.setAttribute('class', 'pic');
  html += div.innerHTML;
} 

let picTable = document.getElementById('container');
picTable.insertAdjacentHTML('beforeend', html);

