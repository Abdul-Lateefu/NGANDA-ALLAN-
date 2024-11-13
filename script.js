let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showImage(index) {
    images.forEach((img, i) => img.classList.toggle('active', i === index));
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

next.addEventListener('click', showNextImage);
prev.addEventListener('click', showPrevImage);

setInterval(showNextImage, 3000); 
