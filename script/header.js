const inputElement = document.querySelector('.input-here');
const inputContainer = document.querySelector('.user-input-box');

inputElement.addEventListener('focus', () => {
    inputContainer.style.border = '2px solid #D4AF37';
});

inputElement.addEventListener('blur', () => {
    inputContainer.style.border = '2px solid transparent';
});