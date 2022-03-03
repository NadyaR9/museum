'use strict';
const booking = document.querySelector('.button_buy'),
    modal = document.querySelector('.modal'),
    closeModal = document.querySelector('.close');


function toggleModal() {
    booking.addEventListener('click', () => {
        modal.classList.add('modal_open');
    });
    
    function toggleClass() {
        modal.classList.remove('modal_open');
        modal.classList.add('modal_close');
    }
    
    closeModal.addEventListener('click', () => {
        toggleClass();
    });
    
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            toggleClass();
        }
    });
    
}

export default toggleModal;