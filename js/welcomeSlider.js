'use strict';

const imgs = document.querySelectorAll('.welcome__slider-item'),
    dots = document.querySelectorAll('.welcome__slider-dot'),
    next = document.querySelector('.welcome__slider-arrow__right'),
    prev = document.querySelector('.welcome__slider-arrow__left'),
    currentNumber = document.querySelector('.welcome__slider-current'),
    totalNumber = document.querySelector('.welcome__slider-total');

let currentSlide = 0;
totalNumber.innerHTML = `0${imgs.length}`;

function activeSlide(n) {
    for (let img of imgs) {
        img.classList.remove('active');
    }
    imgs[n].style.background = `linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.5) 16.19%, rgba(0, 0, 0, 0) 30.73%),
     url(assets/img/welcome-slider/${n+1}.jpg), center / contain`;
    imgs[n].classList.add('active');
}

function activeDot(n) {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

function changeNumber(n) {
    currentNumber.innerHTML = `0${n+1}`;
}

function toggleActive(n) {
    activeSlide(n);
    activeDot(n);
    changeNumber(n);
}

function nextSlide() {
    if (currentSlide === imgs.length - 1) {
        currentSlide = 0;
        toggleActive(currentSlide);
    } else {
        currentSlide++;
        toggleActive(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide === 0) {
        currentSlide = imgs.length - 1;
        toggleActive(currentSlide);

    } else {
        currentSlide--;
        toggleActive(currentSlide);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        currentSlide = indexDot;
        toggleActive(currentSlide);
    });
});

function changeSlide() {
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
}

export default changeSlide;