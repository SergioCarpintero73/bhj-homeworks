

const xxx = document.querySelectorAll(".slider__item");
const dots = Array.from(document.querySelectorAll(".slider__dot"));

document.querySelector(".slider__arrow_next").onclick = () => runSlide('1');
document.querySelector(".slider__arrow_prev").onclick = () => runSlide('2');
let num_img = 0;

dots.forEach((item) => {
    item.onclick = () => {
        item_on = dots.indexOf(item);
        console.log(item_on);
        runDots(item_on);
    }
})

function runDots(num) {
    xxx[num_img].classList.toggle('slider__item_active');
    dots[num_img].classList.toggle('slider__dot_active');
    num_img = num;
    xxx[num_img].classList.toggle('slider__item_active');
    dots[num_img].classList.toggle('slider__dot_active');
}

function runSlide(num) {
    xxx[num_img].classList.toggle('slider__item_active');
    dots[num_img].classList.toggle('slider__dot_active');
    if (num === "1") {
        num_img += 1;
        if (num_img === xxx.length) num_img = 0;
    } else {
        num_img -= 1;
        if (num_img < 0) num_img = xxx.length - 1;
    }
    xxx[num_img].classList.toggle('slider__item_active');
    dots[num_img].classList.toggle('slider__dot_active');
}