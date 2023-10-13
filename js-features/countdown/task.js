let start = document.getElementById('timer');
let count = Number(start.textContent);

const timer = setInterval(() => {
    count -= 1;
    start.textContent = count;
    if (count === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timer);
    }
}, 1000)
