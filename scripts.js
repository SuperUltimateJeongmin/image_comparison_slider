const slider = document.querySelector('.slider');
const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay');

let isDragging = false;

slider.addEventListener('mousedown', function () {
    isDragging = true;
    document.addEventListener('mousemove', moveSlider);
    document.addEventListener('mouseup', function () {
        isDragging = false;
        document.removeEventListener('mousemove', moveSlider);
    });
});

container.addEventListener('mouseleave', function () {
    if (isDragging) {
        isDragging = false;
        document.removeEventListener('mousemove', moveSlider);
    }
});

function moveSlider(e) {
    if (!isDragging) return;

    let rect = container.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    slider.style.left = offsetX + 'px';
    overlay.style.width = offsetX + 'px';
}