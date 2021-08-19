const slide = document.querySelector('.slide');
const slideImg = document.querySelectorAll('.slide img');
const preBtn = document.querySelector('#preBtn');
const nextBtn = document.querySelector('#nextBtn');
let counter = 1;
const size = slideImg[0].clientWidth;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
nextBtn.addEventListener('click', () => {
    if (counter >= slideImg.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})
preBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})
slide.addEventListener('transitioned', () => {
    if (slideImg[counter].id === 'lastClone') {
        slide.style.transition = "none";
        counter = slideImg.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if (slideImg[counter].id === 'firstClone') {
        slide.style.transition = "none";
        counter = slideImg.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
})