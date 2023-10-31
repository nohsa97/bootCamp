window.onload = function () {
    // 문서가 로드 될때.
    let text = document.getElementById('text');
    text.textContent = 'byr';
}

const aEle = document.querySelector('a');

aEle.addEventListener('click', () => {
alert('a태그 크릭');
});

const btn = document.querySelector('.btn');

btn.addEventListener('click', (event) => {
    console.log(event);
});

// clientY 윈도우 부터 거리 좌표
// offsetY 요소로부터 거리 좌표