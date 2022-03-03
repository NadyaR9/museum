'use strict';
const select = document.querySelector('#theme'),
    placeholder = document.querySelector('.booking__theme-placeholder'),
    dateLabel = document.querySelector('#label-date'),
    timeLabel = document.querySelector('#label-time'),
    date = document.querySelector('.booking__date-date'),
    time = document.querySelector('.booking__date-time');

function styleBookingForm() {
    select.addEventListener('change', function () {
        placeholder.classList.add('hidden');
        //placeholder.innerHTML = this.options[this.selectedIndex].text;
    });
    date.addEventListener('change', function () {
        dateLabel.innerHTML = this.value;
    });
    time.addEventListener('change', function () {
        timeLabel.innerHTML = this.value;
    });
}

export default styleBookingForm;