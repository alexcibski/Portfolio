// img carousel
const next = document.querySelector('.next');

const prev = document.querySelector('.prev')

const images = document.getElementsByClassName('images');
//determine which img is currently being shown
let currentImgIndex = 0;
//determing which img was shown previously
let previousImgIndex = 0;

//logic for next button
next.addEventListener('click', () => {
    previousImgIndex = currentImgIndex 
    currentImgIndex++

    if(currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }    

    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
})
//logic for previous button
prev.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex--
    if(currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    }
    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
})
