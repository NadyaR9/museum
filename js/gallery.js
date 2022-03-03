'use strict';

const galleryInnerContainer = document.querySelector('.gallery__inner-container');

let galleryImg = [
    '../assets/img/gallery/gallery1.jpg',
    '../assets/img/gallery/gallery2.jpg',
    '../assets/img/gallery/gallery3.jpg',
    '../assets/img/gallery/gallery4.jpg',
    '../assets/img/gallery/gallery5.jpg',
    '../assets/img/gallery/gallery6.jpg',
    '../assets/img/gallery/gallery7.jpg',
    '../assets/img/gallery/gallery8.jpg',
    '../assets/img/gallery/gallery9.jpg',
    '../assets/img/gallery/gallery10.jpg',
    '../assets/img/gallery/gallery11.jpg',
    '../assets/img/gallery/gallery12.jpg',
    '../assets/img/gallery/gallery13.jpg',
    '../assets/img/gallery/gallery14.jpg',
    '../assets/img/gallery/gallery15.jpg',
];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function gallery() {
    shuffle(galleryImg).forEach((item, index) => {
        const img = document.createElement('img');
        img.classList.add('gallery-img');
        img.src = `${item}`;
        img.alt = `gallery${index+1}`;
        galleryInnerContainer.append(img);
    });
}

export default gallery;