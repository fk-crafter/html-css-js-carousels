const carousel = document.querySelector('.carousel');
const indicatorsContainer = document.querySelector('.indicators');
let currentIndex = 0;

function showImage(index) {
    const translateValue = -index * (300 + 20); // Largeur de l'image + marge
    carousel.style.transform = `translateX(${translateValue}px)`;

    const indicators = Array.from(indicatorsContainer.children);
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function changeImage(offset) {
    currentIndex += offset;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= carousel.children.length) {
        currentIndex = carousel.children.length - 1;
    }

    showImage(currentIndex);
}

function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowLeft':
            changeImage(-1);
            break;
        case 'ArrowRight':
            changeImage(1);
            break;
        default:
            // Ignorer les autres touches
    }
}

Array.from(carousel.children).forEach((_, i) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => showImage(i));
    indicatorsContainer.appendChild(indicator);
});

document.addEventListener('keydown', handleKeyPress);

showImage(currentIndex);
