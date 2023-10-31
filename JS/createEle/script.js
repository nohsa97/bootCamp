// //생성

// const newLi = document.createElement('li');

// // 클래스 아이디추가
// newLi.className = 'list-group-item';
// newLi.id = 'new-item';

// newLi.textContent = 'xx';

// newLi.setAttribute('name', 'New ListITEM');

// const a = document.createElement('a');

// newLi.appendChild(a);



// // 마지막 자식으로 추가
// document.querySelector('ul.list-group').appendChild(newLi);


const listPar = document.querySelector('ul');
const list = document.querySelectorAll('li'); 

// listPar.removeChild(list[0]);

const oldEle = document.getElementById('A');
const newEle = document.createElement('span');

newEle.textContent = 'HI';

oldEle.parentNode.replaceChild(newEle,oldEle);
// 스팬으로 바뀜.