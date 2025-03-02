const inputBox = document.querySelector('.js-input-box');
const inputElement = document.querySelector('.js-input');


inputElement.addEventListener('focus', () => {
    inputBox.classList.add('input-focus');
});

inputElement.addEventListener('blur', () => {
    inputBox.classList.remove('input-focus');
});