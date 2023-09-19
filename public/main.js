const menuToggle = document.querySelector('#menu-toggle1');
const menu = document.querySelector('#menu1');


menuToggle.addEventListener('click', () => {
menu.classList.toggle('active');
});

const toggleModal = () => {
    document.querySelector('.modal')
    .classList.toggle('modal--hidden');
};

document.querySelector('.enquiryForm')
  .addEventListener('click', toggleModal);
document.querySelector('.enquiryForm1')
  .addEventListener('click', toggleModal);
document.querySelector('.enquiryForm2')
  .addEventListener('click', toggleModal);

document.querySelector('#learn-more')
    .addEventListener('submit', (event) => {
        event.preventDefault();
        toggleModal();
    });

document.querySelector('.modal-close-bar span')
    .addEventListener('click' ,toggleModal);