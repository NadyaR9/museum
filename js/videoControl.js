'use strict';

const progress = document.querySelectorAll('.control__progress');

function changeProgress() {
    progress.forEach(item => {
        item.addEventListener('input', function () {
            const value = this.value;
            this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
        });
    });
}

export default changeProgress;