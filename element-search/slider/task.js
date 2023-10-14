const images = Array.from(document.querySelectorAll('.slider__item'));
const arrows = document.querySelectorAll('.slider__arrow');
const dots = Array.from(document.querySelectorAll('.slider__dot'));
const arrowNext = arrows[1]
const arrowPrev = arrows[0]
const a = Array.from(images).findIndex(img => img.className.includes('slider__item_active'))
dots[a].classList.add('slider__dot_active')



function setActiveImage (index) {
    const active = function () {
        const activeImage = (item) => item.classList.contains('slider__item_active');
        return images.findIndex(activeImage);
    };
    const activeIndex = active()
    images[activeIndex].classList.remove('slider__item_active');
    dots[activeIndex].classList.remove('slider__dot_active');
    if (index >= images.length) {
        index = 0;
        images[index].classList.add('slider__item_active');
        dots[index].classList.add('slider__dot_active');
    }
    if (index < 0) {
        index = (images.length - 1);
        images[index].classList.add('slider__item_active');
        dots[index].classList.add('slider__dot_active');
    } else {
        images[index].classList.add('slider__item_active');
        dots[index].classList.add('slider__dot_active');
    }
}


arrowNext.addEventListener('click', () => {
    let activeIndex = Array.from(images).findIndex(img => img.className.includes('slider__item_active'));
    setActiveImage(activeIndex + 1)
})

arrowPrev.addEventListener('click', () => {
    let activeIndex = Array.from(images).findIndex(img => img.className.includes('slider__item_active'));
    setActiveImage(activeIndex - 1)
})


for (const dot of dots) {
    dot.addEventListener('click', () => {
        const dotIndex = dots.indexOf(dot);
        dots.forEach( (dot) => {
            if (dot.className.includes('slider__dot_active')) {
                dot.classList.remove('slider__dot_active')
            }
        })
        const activeImgIndex = Array.from(images).findIndex(image => image.className.includes('slider__item_active'))
        images[activeImgIndex].classList.remove('slider__item_active');
        images[dotIndex].classList.add('slider__item_active');
        dots[dotIndex].classList.add('slider__dot_active');
    })
}
