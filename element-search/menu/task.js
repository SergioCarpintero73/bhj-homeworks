const menuList = document.querySelectorAll('.menu__link');

for (const menu of menuList) {
    menu.addEventListener( 'click', (event) => {
        if (menu.nextElementSibling && menu.nextElementSibling.className.includes('menu_sub')) {
            menu.nextElementSibling.classList.toggle('menu_active');
            event.preventDefault();
        }
    })
}
