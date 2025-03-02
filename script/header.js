const inputBox = document.querySelector('.js-input-box');
const inputElement = document.querySelector('.js-input');


inputElement.addEventListener('focus', () => {
    inputBox.classList.add('input-focus');
});

inputElement.addEventListener('blur', () => {
    inputBox.classList.remove('input-focus');
});

// three dot navigation

const threeDot = document.querySelector('.js-three-dot');
const navigationBox = document.querySelector('.js-nav');
const xCross = document.querySelector('.js-x-cross');

threeDot.addEventListener('click', () => {
    navigationBox.classList.add('navigation');
    navigationBox.classList.remove('remove-nav');
});

xCross.addEventListener('click', () => {
    navigationBox.classList.remove('navigation');
    navigationBox.classList.add('remove-nav');
})