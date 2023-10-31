// // let val;

// // val = document;

// // val = document.baseURI;

// // val = document.head; // 헤드 태그 반환

// // val = document.forms[0].className;

// // console.log(val);

// const headCon = document.getElementById('header-container');

// // headCon.style.display = 'none';
// // 스타일변형 
// headCon.textContent ='text C';
// // 텍스트 변형

// headCon.innerText = 'sasd';

// headCon.innerHTML = '<span>no</span>';
// // html수정

// // document.querySelector('li').style.backgroundColor = 'pink';
// var tx = document.querySelectorAll('li');

// console.log(tx.length);

const list = document.querySelector('ul.list-group');
const listitem = document.querySelector('li.list-group-item:first-child');

let val = list.childNodes;

val = list.childNodes[1];

val = list.children;
// 하위 요소만 반환 text 빼고
val = listitem.nextElementSibling;

console.log(list);
console.log(listitem);
console.log(val);
// val에 찍히는 text는 노드 리스트를 반환하는데 line break 도 포함

//nodeType 1번은 element. 2번은 attribute(사용안함 이제). 3번은 textNode. 8번은 주석처리
//9번은 document 자체. 10번은 doctype