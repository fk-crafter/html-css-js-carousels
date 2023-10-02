const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const slider = document.querySelector('.slider');
const allImages = document.querySelector('.images');

btn1.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-0px)';
});

btn2.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-105%)';
});

btn3.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-209%)';
});

btn4.addEventListener('click', function () {
    allImages.style.transform = 'translateX(-312%)';
});
