const subBtn = document.querySelector('.submit-btn');
const form = document.querySelector('form');
const title = document.querySelector('h2');

// 이벤트
form.addEventListener('submit', handleEv);
// subBtn.addEventListener('dblclick', handleEv);
// subBtn.addEventListener('mousedown', handleEv);
// 더블 클릭 마우스 리브 엔터 다 중요

function handleEv(e){
    if (e.type == 'submit'){
        e.preventDefault();
    }

    console.log(`event type : ${e.type}`);
    title.textContent = `Mouse X : ${e.offsetX} Y : ${e.offsetY}`;
}

