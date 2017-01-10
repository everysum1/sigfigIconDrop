
"use strict"

let jsonImageArray = '[{"imgUrl": "images/1.png"},{"imgUrl": "images/2.png"},{"imgUrl": "images/3.png"},{"imgUrl": "images/4.png"},{"imgUrl": "images/5.png"},{"imgUrl": "images/6.png"},{"imgUrl": "images/7.png"},{"imgUrl": "images/8.png"},{"imgUrl": "images/9.png"},{"imgUrl": "images/10.png"},{"imgUrl": "images/11.png"},{"imgUrl": "images/12.png"}]';
let pictures = JSON.parse(jsonImageArray);
let picList = document.getElementById('pic-list');

for(let i=0; i < pictures.length; i++) {
  let pic = pictures[i]["imgUrl"];
  let li = document.createElement('li');

  li.innerHTML = `<img src="${pic}" id="${i+1}" />`;
  li.setAttribute('class', 'pic');
  li.setAttribute('draggable', 'true');
  li.setAttribute('ondragenter', 'dragEnter(event)');
  li.setAttribute('ondragstart', 'dragStart(event)');
  li.setAttribute('ondragover', 'dragOver(event)');
  li.setAttribute('ondrop', 'dropped(event)');
  
  picList.appendChild(li);
};

function dragStart(e){
  let list = document.querySelectorAll('.pic')
  let picIndex = Array.prototype.indexOf.call(list, e.target.parentNode)
  e.dataTransfer.setData('text/plain', picIndex);
};

function dropped(e) {
  e.preventDefault();
  let indexedList = document.querySelectorAll('.pic');
  let oldIndex = e.dataTransfer.getData('text/plain');
  let target = e.target.parentNode;
  let newIndex = Array.prototype.indexOf.call(indexedList, e.target.parentNode)
  let dropped = indexedList[oldIndex];
  dropped.remove();

  let list = document.getElementById('pic-list');
  
  if (newIndex < oldIndex) {
    list.insertBefore(dropped, target);
  } else {

    list.insertBefore(dropped, target.nextSibling);
  }
};

function dragEnter(e) {
  e.preventDefault();
};

function dragOver(e) {
  e.preventDefault();
};