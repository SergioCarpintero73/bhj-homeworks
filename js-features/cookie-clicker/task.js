function clicker () {
    const cookie = document.getElementById('cookie')
    let clickCount = document.getElementById('clicker__counter')
    let clickCookie = 0;
    cookie.onclick = () => {
        cookie.width = ++clickCookie % 2 === 0 ? 225 : 175;
        console.log(clickCookie / 2, clickCookie % 2)
        clickCount.textContent = clickCookie
    }

}


clicker()
