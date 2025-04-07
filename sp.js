const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateGallery() {
    const imageWidth = images[0].clientWidth;
    gallery.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

function showPrevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateGallery();
}

function showNextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

window.addEventListener('resize', updateGallery);
