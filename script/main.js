const backwardArrow = document.querySelector('.js-backward');
const forwardArrow = document.querySelector('.js-forward');
const gradientContainer = document.querySelector('.gradient-container');

const gradient = [
    "linear-gradient(45deg, #f7e1b5, #f8c3a3)", 
    "linear-gradient(135deg, #d1d3d8, #4b5363)",
    "linear-gradient(90deg, #b76e79, #f7c7c3)", 
    "linear-gradient(120deg, #006f46, #a7d8c2)", 
    "linear-gradient(45deg, #b8a0d0, #f7c9e4)",
    "linear-gradient(135deg, #f4c542, #f3e1b7)", 
    "linear-gradient(120deg, #003f4d, #00bcd4)", 
    "linear-gradient(135deg, #f2f2f2, #ffffff)"
];

let currentGradientIndex = 0;

function changeGradient(direction) {
    if (direction === 'forward') {
        currentGradientIndex = (currentGradientIndex + 1) % gradient.length;
    } else if (direction === 'backward') {
        currentGradientIndex = (currentGradientIndex - 1) % gradient.length;
    }

    gradientContainer.style.background = gradient[currentGradientIndex];
}

backwardArrow.addEventListener('click', () => {
    changeGradient('backward');
});

forwardArrow.addEventListener('click', () => {
    changeGradient('forward');
})