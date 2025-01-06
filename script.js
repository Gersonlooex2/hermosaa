const starsContainer = document.getElementById('stars-container');
const carta = document.querySelector('.carta');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2 + 1; // Tamaño entre 1 y 3px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 2}s`; // Duración entre 2 y 4s

    // Ajustar la posición de la estrella para que se mantenga dentro de los límites
    const cartaRect = carta.getBoundingClientRect();
    const maxX = window.innerWidth - cartaRect.left - size;
    const maxY = window.innerHeight - cartaRect.top - size;

    const starX = Math.random() * maxX;
    const starY = Math.random() * maxY;

    star.style.left = `${starX}px`;
    star.style.top = `${starY}px`;

    starsContainer.appendChild(star);

    // Eliminar la estrella después de que su animación termine
    setTimeout(() => {
        star.remove();
    }, 4000); // La animación dura 4 segundos
}

// Crear estrellas periódicamente
setInterval(createStar, 100);
