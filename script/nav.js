const toggleElement = document.querySelector('.js-toggle');
const barElement = document.querySelector('.js-bars');


barElement.addEventListener('click', () => {
    if (toggleElement.classList.contains('js-visible')) {
        toggleElement.classList.remove('js-visible');
    } else {
        toggleElement.classList.add('js-visible');
    }
});