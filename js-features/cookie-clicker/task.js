let cook = document.getElementById("cookie");
let count = 0;
let set_count = document.getElementById('clicker__counter')
let avg_count = document.getElementById('avg__counter')
let start = 0;
let finish = 0;

cook.onclick = () => {
    let finish = Date.now();
    if (start > 0) {
        avg_count.textContent = `${Math.round(1 / ((finish - start) / 1000))}`
    }
    start = Date.now();
    count += 1;
    cook.width += 50;
    set_count.textContent = count;
    setTimeout(() => {cook.width -= 50;}, 50)
}