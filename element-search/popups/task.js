const popMain = document.getElementById('modal_main');
const popSuccess = document.getElementById('modal_success');
const popClose = document.querySelectorAll('.modal__content div');
const popBtn = document.querySelector('.modal__content a');


popMain.classList.add('modal_active');

popBtn.onclick = () => {
    popSuccess.classList.add('modal_active');
    popMain.classList.remove('modal_active');
}

for (const button of popClose) {
    button.addEventListener('click', () => {
        popMain.classList.remove('modal_active');
        popSuccess.classList.remove('modal_active');

    })
}
