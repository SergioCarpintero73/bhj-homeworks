


const xxx = document.querySelectorAll(".menu__item");
const arr = Array.from(xxx);

let item_on;
arr.forEach((item) => {
    if (item.querySelector('.menu_sub')) {
        item.querySelector('.menu__link').onclick = () => {
            item_on = arr.indexOf(item);
            roll();
            return false;
        }
    }
})

function roll() {
    for (item of arr) {
        if (item.querySelector('.menu_sub') && arr.indexOf(item) === item_on) {
            item.querySelector('.menu_sub').classList.toggle('menu_active')
        } else if (item.querySelector('.menu_sub') && arr.indexOf(item) !== item_on) {
            item.querySelector('.menu_sub').classList.toggle('menu_active', false)
        }
    }
}



